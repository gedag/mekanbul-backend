var mongoose = require('mongoose');
var Venue = mongoose.model("venue");

const createResponse = function (res, status, content) {
    res.status(status).json(content);
}

// 1. ADIM: Son Puanı Hesapla (Slayt 7)
var calculateLastRating = function (incomingVenue, isDeleted) {
    var i, numComments, avgRating, sumRating = 0;
    var numComments = incomingVenue.comments.length;
    
    if (incomingVenue.comments) {
        // Eğer silme işlemi yapılmışsa ve hiç yorum kalmamışsa puan 0 olsun
        if (incomingVenue.comments.length === 0 && isDeleted) {
            avgRating = 0;
        } else {
            // Tüm yorumların puanlarını topla
            for (i = 0; i < numComments; i++) {
                sumRating = sumRating + incomingVenue.comments[i].rating;
            }
            // Ortalamayı al ve yukarı yuvarla (Math.ceil)
            avgRating = Math.ceil(sumRating / numComments);
        }
        // Mekanın yeni puanını güncelle ve kaydet
        incomingVenue.rating = avgRating;
        incomingVenue.save();
    }
};

// 2. ADIM: Ortalama Puanı Güncelle (Slayt 8)
var updateRating = function (venueid, isDeleted) {
    Venue.findById(venueid)
        .select("rating comments")
        .exec()
        .then(function (venue) {
            calculateLastRating(venue, isDeleted);
        });
};

// 3. ADIM: Yorum Oluşturma Yardımcısı (Slayt 9)
var createComment = function (req, res, incomingVenue) {
    try {
        // Yorumu listeye ekle
        incomingVenue.comments.push(req.body);
        // Mekanı kaydet
        incomingVenue.save().then(function (venue) {
            var comments = venue.comments;
            var comment = comments[comments.length - 1]; // Son eklenen yorumu al
            updateRating(venue._id, false); // Puanı güncelle
            createResponse(res, 201, comment); // Cevap dön
        });
    } catch (error) {
        createResponse(res, 400, error);
    }
};

// 4. ADIM: Yorum Ekleme Ana Fonksiyonu (Slayt 10)
const addComment = async function (req, res) {
    try {
        await Venue.findById(req.params.venueid)
            .select("comments")
            .exec()
            .then((incomingVenue) => {
                if (!incomingVenue) {
                    createResponse(res, 404, { "status": "Mekan bulunamadı" });
                } else {
                    createComment(req, res, incomingVenue);
                }
            });
    } catch (error) {
        createResponse(res, 400, { status: "Yorum ekleme başarısız" });
    }
};

// 5. ADIM: Yorum Getirme (Get Comment)
const getComment = async function (req, res) {
    try {
        await Venue.findById(req.params.venueid)
            .select("name comments")
            .exec()
            .then(function (venue) {
                var response, comment;
                if (!venue) {
                    createResponse(res, 404, { "status": "Mekanid yanlış" });
                } else if (venue.comments.id(req.params.commentid)) {
                    comment = venue.comments.id(req.params.commentid);
                    response = {
                        venue: {
                            name: venue.name,
                            id: req.params.id,
                        },
                        comment: comment
                    }
                    createResponse(res, 200, response);
                } else {
                    createResponse(res, 404, { "status": "Yorum id yanlış" });
                }
            });
    } catch (error) {
        createResponse(res, 404, { "status": "Mekan bulunamadı" });
    }
};

// 6. ADIM: Yorum Güncelleme (Slayt 16)
const updateComment = async function (req, res) {
    try {
        await Venue.findById(req.params.venueid)
            .select("comments")
            .exec()
            .then(function (venue) {
                try {
                    let comment = venue.comments.id(req.params.commentid);
                    comment.set(req.body); // Yeni verileri set et
                    venue.save().then(function () {
                        updateRating(venue._id, false); // Puanı tekrar hesapla
                        createResponse(res, 201, comment);
                    });
                } catch (error) {
                    createResponse(res, 400, error);
                }
            });
    } catch (error) {
        createResponse(res, 400, error);
    }
};

// 7. ADIM: Yorum Silme (Slayt 22)
const deleteComment = async function (req, res) {
    try {
        await Venue.findById(req.params.venueid)
            .select("comments")
            .exec()
            .then(function (venue) {
                try {
                    let comment = venue.comments.id(req.params.commentid);
                    comment.deleteOne(); // Yorumu sil
                    venue.save().then(function () {
                        updateRating(venue._id, true); // Silindiği için true gönder
                        createResponse(res, 200, { status: comment.author + " isimli kişinin yorumu silindi" });
                    });
                } catch (error) {
                    createResponse(res, 400, error);
                }
            });
    } catch (error) {
        createResponse(res, 400, error);
    }
};

module.exports = {
    addComment,
    getComment,
    updateComment,
    deleteComment
};