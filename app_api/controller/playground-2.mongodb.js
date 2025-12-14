
use('mekanbul');


db.venues.insertMany([
  {
    "name": "Starbucks",
    "address": "Centrum Garden AVM",
    "rating": 4,
    "foodanddrink": ["Kahve", "Pasta", "Kek"],
    "coordinates": [30.5567, 37.7854],
    "hours": [
      {"days": "Pazartesi-Cuma", "open": "08:00", "close": "23:00", "isClosed": false},
      {"days": "Haftasonu", "open": "09:00", "close": "23:00", "isClosed": false}
    ]
  },
  {
    "name": "Gloria Jeans",
    "address": "Iyaş Park AVM",
    "rating": 3,
    "foodanddrink": ["Kahve", "Sandviç", "Çay"],
    "coordinates": [30.5489, 37.7792],
    "hours": [
       {"days": "Her gün", "open": "09:00", "close": "22:00", "isClosed": false}
    ]
  },
  {
    "name": "Kahve Dünyası",
    "address": "SDÜ Doğu Kampüsü",
    "rating": 2,
    "foodanddrink": ["Türk Kahvesi", "Çay", "Lokum"],
    "coordinates": [30.5285, 37.8301],
    "hours": [
       {"days": "Pazartesi-Cuma", "open": "08:00", "close": "20:00", "isClosed": false},
       {"days": "Haftasonu", "isClosed": true}
    ]
  },
  {
    "name": "Coffy Time",
    "address": "İstasyon Caddesi",
    "rating": 3,
    "foodanddrink": ["Kahve", "Sufle", "Waffle"],
    "coordinates": [30.5521, 37.7689],
    "hours": [
       {"days": "Her gün", "open": "10:00", "close": "00:00", "isClosed": false}
    ]
  },
  {
    "name": "Mado",
    "address": "Kafeler Caddesi",
    "rating": 5,
    "foodanddrink": ["Dondurma", "Tatlı", "Sahlep"],
    "coordinates": [30.5540, 37.7710],
    "hours": [
       {"days": "Her gün", "open": "09:00", "close": "01:00", "isClosed": false}
    ]
  }
]);