var mongoose = require('mongoose');

// 1. Varsayılan olarak yerel (Localhost) adresini tanımla
var dbURI = 'mongodb://localhost/mekanbul'; 

// 2. Eğer .env dosyasında MONGODB_URI varsa (Cloud) onu kullan
if (process.env.MONGODB_URI) {
    dbURI = process.env.MONGODB_URI;
}

// 3. Bağlantıyı kur
mongoose.connect(dbURI);

// 4. Bağlantı Durumlarını Konsola Yazdır
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

// 5. Uygulama Kapatıldığında Bağlantıyı Kes (Ctrl+C basınca)
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination');
        process.exit(0);
    });
});

// 6. Venue (Mekan) Modelini Dahil Et
require('./venue');