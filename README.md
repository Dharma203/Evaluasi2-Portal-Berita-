# 📰 Portal Berita — Next.js 14 + OAuth + NewsAPI

Aplikasi web **Portal Berita** yang menampilkan berita real-time dari berbagai sumber terpercaya, dengan fitur login menggunakan Google OAuth2, tema gelap/terang otomatis, dan layout responsif menggunakan Next.js 14 App Router dan TailwindCSS.  

Dirancang dengan performa tinggi dan keamanan melalui proteksi halaman NextAuth, serta pengalaman pengguna yang halus dan modern.

---

## 🚀 Fitur Utama

- 🔐 **Login OAuth2 Google** menggunakan NextAuth.js untuk autentikasi aman dan mudah
- 📰 **Pengambilan berita real-time** dari [NewsAPI.org](https://newsapi.org) dengan server-side fetching agar bebas dari masalah CORS
- 🌗 **Dukungan mode gelap & terang** otomatis menyesuaikan preferensi sistem pengguna
- 📱 **Desain responsif** untuk tampilan optimal di perangkat mobile, tablet, dan desktop
- 🔒 **Proteksi halaman** dengan middleware NextAuth, hanya pengguna terautentikasi dapat mengakses konten
- 🧠 **Fallback dan error handling** data agar aplikasi tetap stabil jika API berita kosong atau gagal fetch
- 🧼 **UI & UX bersih dan modern** dengan TailwindCSS dan animasi interaktif
- 🧭 **Navigasi mulus** antara daftar berita dan detail artikel
- ⚡ **Server-side rendering (SSR)** dan server components di Next.js 14 untuk performa dan SEO maksimal
- 🧩 **Modular dan scalable**, mudah dikembangkan dan dimodifikasi

---

## 📦 Teknologi & Tools

- [Next.js 14 (App Router)](https://nextjs.org/docs/app)
- [React 18](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [NextAuth.js](https://next-auth.js.org/) untuk OAuth2 Google
- [NewsAPI.org](https://newsapi.org) sebagai sumber berita

---

## 🛠️ Instalasi & Setup

1. **Clone repository**

git clone https://github.com/username/portal-berita.git

cd portal-berita

2. **Install Dependencies**

npm install

3. **Buat File Environment**

NEXTAUTH_SECRET=your_nextauth_secret_here

GOOGLE_CLIENT_ID=your_google_oauth_client_id

GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret

NEWS_API_KEY=your_newsapi_org_api_key

4. **Jalankan**

npm run dev
