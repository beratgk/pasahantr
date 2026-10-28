# PASAHANTR sitesi

## Dosyalar
- `index.html` — site (tasarım)
- `urunler.json` — ürünler (fiyat, indirim, görsel, link buradan değişir)

## Ürün nasıl eklenir / değiştirilir?
GitHub'da `urunler.json` dosyasını aç, kalem simgesine tıkla, düzenle, "Commit changes" de.
Vercel birkaç saniye içinde siteyi kendisi günceller.

Bir ürün şu alanlardan oluşur:

```json
{
  "ad": "Premium Hoodie",
  "kategori": "ust",
  "aciklama": "Yeni sezon",
  "fiyat": 1299,
  "indirimliFiyat": 999,
  "gorsel": "https://.../foto.jpg",
  "etiket": "YENİ",
  "link": "https://www.shopier.com/...",
  "stok": true
}
```

- `kategori`: `ust`, `alt` veya `aksesuar`
- `fiyat`: sayı (tırnaksız). Boş bırakmak için `null` yaz, sitede "Fiyat sor" görünür.
- `indirimliFiyat`: indirim yoksa `null`. Doluysa eski fiyat üstü çizili görünür ve kartta %indirim etiketi çıkar.
- `gorsel`: foto adresi. Boşsa ("") yer tutucu görünür.
- `etiket`: kartın köşesindeki yazı (ÇOK SATAN, YENİ...). İstemezsen "".
- `link`: Shopier ürün sayfası. Doluysa "Sipariş ver" düğmesi oraya gider, boşsa WhatsApp açılır.
- `stok`: `false` yaparsan kart "TÜKENDİ" görünür.

Ürünü silmek için o ürünün `{ ... }` bloğunu sil. Bloklar arasındaki virgüllere dikkat et: son üründen sonra virgül olmaz.

## Not
`index.html` dosyasını bilgisayarında çift tıklayıp açarsan ürünler görünmez (tarayıcı yerel dosyadan okumaya izin vermez). Site Vercel'de yayınlandığında normal çalışır.
