var mongoose = require('mongoose');
// Saatler Şeması 
var hour = new mongoose.Schema({
    days: { type: String, required: true },
    open: String,
    close: String,
    isClosed: { type: Boolean, required: false }
});

// Yorumlar Şeması 
var comment = new mongoose.Schema({
    author: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    text: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

// Ana Mekan Şeması
var venue = new mongoose.Schema({
    name: { type: String, required: true },
    address: String,
    rating: { type: Number, default: 0, min: 0, max: 5 },
    foodanddrink: [String],
    coordinates: { type: [Number], index: '2dsphere' },
    hours: [hour],
    comments: [comment]
});

// Modeli derle ve dışa aktar
mongoose.model('venue', venue, 'venues');