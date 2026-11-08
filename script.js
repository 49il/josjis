/**
 * JOSJIS — Main JavaScript
 * Handles dynamic content, WhatsApp messaging, and mobile navigation.
 */

// Nomor WhatsApp JosJis (ganti jika diperlukan)
const WA_NUMBER = '6281234567890';

// Data Paket (Berdasarkan PDF Layanan JosJis)
const DATA_PAKET = [
  {
    nama: 'STARTER',
    sub: 'Konsistensi Dasar',
    deskripsi: 'Ideal untuk UMKM yang ingin memulai eksistensi digital dengan konten rapi dan terencana.',
    featured: false,
    fitur: [
      'Pengelolaan 2 Platform (Instagram / TikTok)',
      '12 - 15 Konten Feeds/Carousel per bulan',
      'Caption persuasif & hashtag tertarget',
      'Penyusunan Kalender Konten bulanan',
      '1x Revisi desain per konten'
    ],
    pesanWa: 'Halo josjis, saya ingin konsultasi dan memesan Paket STARTER (Konsistensi Dasar).'
  },
  {
    nama: 'GROWTH',
    sub: 'Paling Populer',
    deskripsi: 'Pilihan terbaik untuk brand berkembang yang ingin menjangkau audiens lebih luas lewat video Reels.',
    featured: true,
    badge: 'Paling Populer',
    fitur: [
      'Pengelolaan hingga 3 Platform (IG, TikTok, FB)',
      '20 - 24 Konten per bulan (Feeds & Reels)',
      'Copywriting strategis + riset tren audio',
      'Optimasi waktu posting di prime time',
      'Laporan performa bulanan transparan',
      '2x Revisi desain per konten'
    ],
    pesanWa: 'Halo josjis, saya ingin berkonsultasi mengenai Paket GROWTH (Paling Populer).'
  },
  {
    nama: 'PRO / CUSTOM',
    sub: 'Skala Lebih Cepat',
    deskripsi: 'Solusi lengkap bagi brand yang siap mendominasi pasar digital dengan konten harian dan strategi intensif.',
    featured: false,
    fitur: [
      'Pengelolaan 3 Platform Media Sosial',
      'Konten Harian / 30 Konten per bulan (Feeds & Reels)',
      'Strategi Campaign khusus & riset kompetitor',
      'Bantuan manajemen interaksi audiens',
      'Konsultasi branding eksklusif via chat/call',
      'Laporan performa mendalam & rekomendasi lanjutan'
    ],
    pesanWa: 'Halo josjis, saya ingin konsultasi Paket PRO / CUSTOM untuk skala bisnis saya.'
  }
];

// Data Portofolio JosJis
const DATA_PORTOFOLIO = [
  {
    nama: 'Imago Studio',
    kategori: 'Creative & Photo Studio',
    img: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=700&q=80'
  },
  {
    nama: 'Kalirumologi Kopi',
    kategori: 'F&B & Coffee Culture',
    img: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=700&q=80'
  },
  {
    nama: 'Studio Fashion Lokal',
    kategori: 'Apparel & Lifestyle Brand',
    img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80'
  },
  {
    nama: 'Pure Botanica Glow',
    kategori: 'Skincare & Personal Care',
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80'
  },
  {
    nama: 'Dapur Rempah Heritage',
    kategori: 'Kuliner & Rasa Nusantara',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=80'
  },
  {
    nama: 'Urban Workspace Co.',
    kategori: 'Corporate & Hospitality',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80'
  }
];

// Inisialisasi saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
  renderPaket();
  renderPortofolio();
  initNavigation();
  initWhatsAppLinks();
  updateFooterYear();
});

// Render Kartu Paket
function renderPaket() {
  const container = document.getElementById('grid-paket');
  if (!container) return;

  container.innerHTML = DATA_PAKET.map(p => `
    <div class="paket-card ${p.featured ? 'featured' : ''}">
      ${p.badge ? `<span class="paket-badge">${p.badge}</span>` : ''}
      <h3 class="paket-nama">${p.nama}</h3>
      <p class="paket-sub">${p.sub}</p>
      <p class="paket-deskripsi">${p.deskripsi}</p>
      <ul class="paket-fitur">
        ${p.fitur.map(f => `<li>${f}</li>`).join('')}
      </ul>
      <a href="https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(p.pesanWa)}" target="_blank" rel="noopener" class="btn-paket">
        Pilih ${p.nama} <span>→</span>
      </a>
    </div>
  `).join('');
}

// Render Kartu Portofolio
function renderPortofolio() {
  const container = document.getElementById('grid-portofolio');
  if (!container) return;

  container.innerHTML = DATA_PORTOFOLIO.map(item => `
    <div class="porto-item">
      <img src="${item.img}" alt="${item.nama}" class="porto-img" loading="lazy">
      <div class="porto-overlay">
        <span class="porto-category">${item.kategori}</span>
        <h4 class="porto-name">${item.nama}</h4>
      </div>
    </div>
  `).join('');
}

// Navigasi & Mobile Menu
function initNavigation() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });

    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('open');
      }
    });
  }
}

// Set WhatsApp link dinamis untuk semua tombol ber-data-pesan
function initWhatsAppLinks() {
  document.querySelectorAll('[data-pesan]').forEach(el => {
    const text = el.getAttribute('data-pesan');
    el.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    el.target = '_blank';
    el.rel = 'noopener';
  });
}

// Update tahun dinamis di footer
function updateFooterYear() {
  const yearEl = document.getElementById('tahun');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// Tampilkan Toast jika dibutuhkan
function showToast(message, duration = 3000) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}
