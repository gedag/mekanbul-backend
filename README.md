# Mekanbul Backend API

RESTful API ile Mekanbul uygulamasının backend servisi.
**Canlı Uygulama (Vercel):** https://mekanbul-backend-raw5.vercel.app/

Bu proje **Node.js**, **Express.js** ve **MongoDB (Mongoose)** kullanılarak geliştirilmiş bir mekan listeleme, detay görüntüleme, yorum ekleme/güncelleme/silme API’sidir. API’ye **Postman / Thunder Client** gibi araçlarla istek atarak çalışabilirsiniz.

---

## 📌 Özellikler

- Mekanları listeleme ve detay gösterme  
- Yorum ekleme / güncelleme / silme  
- Basit CRUD API yapısı  
- MongoDB veri tabanı ile veri kaydetme  
- Test görselleri ve API akış ekran görüntüleri

---
## 🛠 Kurulum

### Gereksinimler

- Node.js (v18+)
- MongoDB Atlas hesabı

---

### Yerel Kurulum

```bash
# Repoyu klonla
git clone https://github.com/KULLANICI_ADIN/mekanbul-backend.git
cd mekanbul-backend

# Bağımlılıkları yükle
npm install

# .env dosyasını oluştur
echo "MONGODB_URI=mongodb+srv://KULLANICI:SIFRE@cluster.mongodb.net/mekanbul" > .env

# Sunucuyu başlat
npm start


Postman Test Sonuçları
Aşağıda API uç noktaları için yapılan Postman testlerinin ekran görüntüleri bulunmaktadır:

## 📸 Postman API Testleri

### Mekan Ekleme
![Add Venue](tests/AddVenue.png)

### Mekanları Listeleme
![List Nearby Venues](tests/ListNearbyVenues.png)

### Tek Mekan Getirme
![Get Venue](tests/GetVenue.png)

### Mekan Güncelleme
![Update Venue](tests/UpdateVenue.png)

### Mekan Silme
![Delete Venue](tests/DeleteVenue.png)

### Yorum Ekleme
![Add Comment](tests/AddComment.png)

### Yorum Getirme
![Get Comment](tests/GetComment.png)

### Yorum Güncelleme
![Update Comment](tests/UpdateComment.png)

### Yorum Silme
![Delete Comment](tests/DeleteComment.png)
