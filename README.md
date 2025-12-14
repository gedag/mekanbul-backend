# Mekanbul Backend API

RESTful API ile Mekanbul uygulamasının backend servisi.  
**Canlı Uygulama (Vercel):** https://mekanbul-backend-raw5.vercel.app/

Bu proje **Node.js**, **Express.js** ve **MongoDB (Mongoose)** kullanılarak geliştirilmiş bir mekan listeleme, detay görüntüleme, yorum ekleme / güncelleme / silme API’sidir.  
API’ye **Postman** veya **Thunder Client** ile istek atılarak test edilebilir.

---

## 📌 Özellikler

- Mekanları listeleme ve detay görüntüleme  
- Mekan ekleme, güncelleme ve silme  
- Yorum ekleme / güncelleme / silme  
- RESTful API mimarisi  
- MongoDB (Mongoose) veri modeli  
- Postman API test görselleri

---

## 🔗 API Uç Noktaları (Endpoints)

Aşağıda API tarafından sunulan HTTP metotları ve uç noktalar listelenmiştir.

### Mekan İşlemleri
| Metot | Uç Nokta (Endpoint) | Açıklama |
| :--- | :--- | :--- |
| `GET` | `/api/venues` | Tüm mekanları listele |
| `POST` | `/api/venues` | Yeni mekan ekle |
| `GET` | `/api/venues/:venueid` | Mekan detayını getir |
| `PUT` | `/api/venues/:venueid` | Mekanı güncelle |
| `DELETE` | `/api/venues/:venueid` | Mekanı sil |

### Yorum İşlemleri
| Metot | Uç Nokta (Endpoint) | Açıklama |
| :--- | :--- | :--- |
| `POST` | `/api/venues/:venueid/comments` | Yorum ekle (mekana) |
| `GET` | `/api/venues/:venueid/comments/:commentid` | Tekil yorum getir |
| `PUT` | `/api/venues/:venueid/comments/:commentid` | Yorum güncelle |
| `DELETE` | `/api/venues/:venueid/comments/:commentid` | Yorum sil |

---

## 🛠 Kurulum

### Gereksinimler

- Node.js (v18+)
- MongoDB Atlas hesabı

### Yerel Kurulum

```bash
# Repoyu klonla
git clone [https://github.com/KULLANICI_ADIN/mekanbul-backend.git](https://github.com/KULLANICI_ADIN/mekanbul-backend.git)
cd mekanbul-backend

# Bağımlılıkları yükle
npm install

# .env dosyasını oluştur
echo "MONGODB_URI=mongodb+srv://KULLANICI:SIFRE@cluster.mongodb.net/mekanbul" > .env

# Sunucuyu başlat
npm start
```

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
