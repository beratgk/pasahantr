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

- `kategori`: `kazak` (Kazak Çeşitleri) veya `hirka` (Hırka Çeşitleri). Başka bir şey yazarsan ürün sadece "Tümü" filtresinde görünür.
- `bedenler`: stokta olan bedenler. `["S", "M", "L"]` gibi yaz, kartta küçük kutucuklar olarak görünür. Bedeni biten ürünü listeden çıkar, hiç beden yazmazsan kutucuk görünmez.
- `fiyat`: sayı (tırnaksız). Boş bırakmak için `null` yaz, sitede "Fiyat sor" görünür.
- `indirimliFiyat`: indirim yoksa `null`. Doluysa eski fiyat üstü çizili görünür ve kartta %indirim etiketi çıkar.
- `gorsel`: foto adresi. Tek foto için `"gorsel": "gorseller/a.jpg"`. Birden fazla foto için köşeli parantez kullan: `"gorsel": ["gorseller/a.jpg", "gorseller/b.jpg"]`. Kartta ok tuşları ve noktalar çıkar, telefonda kaydırılır. Boşsa ("") yer tutucu görünür.
- `etiket`: kartın köşesindeki yazı (ÇOK SATAN, YENİ...). İstemezsen "".
- `link`: Shopier ürün sayfası. Doluysa "Sipariş ver" düğmesi oraya gider, boşsa WhatsApp açılır.
- `stok`: `false` yaparsan kart "TÜKENDİ" görünür.
- `stokAdet`: stok sayısı. Bilmiyorsan ya da göstermek istemiyorsan `null` bırak. Sayı 5 veya altına inince kartta "● Son 3 adet" uyarısı çıkar, `0` yaparsan kart otomatik "TÜKENDİ" olur. Uyarı sınırı `index.html` içindeki `STOK_UYARI_LIMITI` değeridir (şu an 5).

Ürünü silmek için o ürünün `{ ... }` bloğunu sil. Bloklar arasındaki virgüllere dikkat et: son üründen sonra virgül olmaz.

## Not
`index.html` dosyasını bilgisayarında çift tıklayıp açarsan ürünler görünmez (tarayıcı yerel dosyadan okumaya izin vermez). Site Vercel'de yayınlandığında normal çalışır.

