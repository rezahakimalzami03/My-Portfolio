export const systems = [
  {
    name: 'Portal Rekrutmen',
    url: 'https://rekrutmen.rsuamira.com/',
    what: 'Portal karir RSU Amira. Kandidat melihat lowongan, mendaftar, dan melamar online. Tim HRD mengelola lowongan, pelamar, dan testimoni karyawan dari satu panel.',
    facts: ['751+ pelamar terdaftar', '15+ bidang pekerjaan', 'Lowongan & testimoni dikelola dari panel admin'],
    stack: ['Laravel', 'Tailwind CSS'],
  },
  {
    name: 'Troli Emergency',
    url: 'https://troli.rsuamira.com/login',
    what: 'Berita acara pembukaan dan penutupan troli emergency, yang sebelumnya dicatat di kertas, kini dicatat secara digital. Petugas masuk dengan akun masing-masing.',
    facts: ['Login per petugas', 'Pencatatan buka/tutup troli'],
    stack: ['Web app', 'Autentikasi'],
    emergency: true,
  },
  {
    name: 'Narasi',
    url: 'https://narasi.rsuamira.com/',
    what: 'Aplikasi internal RSU Amira yang diakses lewat halaman masuk.',
    facts: ['Akses terbatas untuk pengguna terdaftar'],
    stack: ['Laravel'],
  },
];

export const earlier = [
  { name: 'Vocasia Website V4', role: 'Front-end Developer, VOCASIA', note: 'Halaman web responsif dengan Next JS.', url: 'https://gitlab.com/divisi_it/vocasia-frontend-web' },
  { name: 'Company Profile OK OCE', role: 'Web Developer, OK OCE Indonesia', note: 'React JS dan Tailwind CSS.', url: 'https://web-okoce.vercel.app/' },
  { name: 'DonateCom', role: 'Capstone Project, Dicoding Indonesia', note: 'Front-end React JS, back-end Node.js.', url: 'https://github.com/orgs/Capstone-Project-DonateCom/repositories' },
  { name: 'Penyiraman otomatis', role: 'Internet of Things', note: 'NodeMCU terhubung ke Telegram secara real-time.', url: 'https://youtu.be/Z0LKqzzOBuU' },
];

export const skills = {
  'Back-end': ['Laravel', 'PHP', 'MySQL', 'Node.js'],
  'Front-end': ['React', 'Next JS', 'Tailwind CSS', 'JavaScript', 'HTML & CSS'],
  Alat: ['Git', 'GitHub', 'GitLab'],
};
