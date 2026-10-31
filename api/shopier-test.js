module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  const token = process.env.SHOPIER_PAT;
  if (!token) {
    return res.status(500).json({ hata: 'SHOPIER_PAT Vercel Environment Variables içinde tanımlı değil.' });
  }
  const base = 'https://api.shopier.com/v1';
  const denemeler = [
    { ad: 'urunler_gercek_anahtar', yol: '/products?limit=3', t: token, govdeGoster: true },
    { ad: 'urunler_parametresiz', yol: '/products', t: token, govdeGoster: true },
    { ad: 'urunler_sahte_anahtar', yol: '/products?limit=3', t: 'sahte-anahtar-123', govdeGoster: true },
    { ad: 'siparisler_sadece_durum', yol: '/orders?limit=1', t: token, govdeGoster: false },
  ];
  const sonuc = [];
  for (const d of denemeler) {
    try {
      const r = await fetch(base + d.yol, {
        headers: { Authorization: 'Bearer ' + d.t, Accept: 'application/json', 'User-Agent': 'PasahanTR-Site/1.0' },
      });
      const text = await r.text();
      let govde;
      if (d.govdeGoster) { try { govde = JSON.parse(text); } catch (e) { govde = text.slice(0, 1500); } }
      sonuc.push({
        deneme: d.ad,
        durum: r.status,
        sunucu: r.headers.get('server') || null,
        cfRay: r.headers.has('cf-ray'),
        govde,
      });
    } catch (e) {
      sonuc.push({ deneme: d.ad, hata: String((e && e.message) || e) });
    }
  }
  return res.status(200).json(sonuc);
};
