module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  const token = process.env.SHOPIER_PAT;
  if (!token) {
    return res.status(500).json({ hata: 'SHOPIER_PAT Vercel Environment Variables içinde tanımlı değil.' });
  }
  try {
    const r = await fetch('https://api.shopier.com/v1/products?limit=3', {
      headers: { Authorization: 'Bearer ' + token, Accept: 'application/json' },
    });
    const text = await r.text();
    let govde;
    try { govde = JSON.parse(text); } catch (e) { govde = text.slice(0, 3000); }
    return res.status(200).json({ shopierDurumKodu: r.status, govde });
  } catch (e) {
    return res.status(502).json({ hata: 'Shopier\'e ulaşılamadı', detay: String(e && e.message || e) });
  }
};
