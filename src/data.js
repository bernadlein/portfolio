const BASE = import.meta.env.BASE_URL; 

export const DATA = {
  name: "Bernadus Boli",
  role: "Web Developer | Data & AI Enthusiast",
  summary:
    "Informatics Engineering graduate dengan minat kuat di Data Science & AI. Pengalaman membangun sistem web dan proyek Computer Vision (YOLOv7).",
  location: "Surabaya, Indonesia",
  email: "leinsgreenadz@gmail.com",
  github: "https://github.com/bernadlein",
  linkedin: "#",

  avatar: `${BASE}avatar.jpg`,


  // ==== KEAHLIAN ====
  skills: [
    { group: "Programming & AI", items: ["Python", "YOLOv7", "Machine Learning", "Computer Vision"] },
    { group: "Web", items: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "SQL (dasar)"] },
    { group: "BI & Data", items: ["Microsoft Excel", "Google Sheets", "KPI Design", "Star Schema", "InfoCube", "DSO"] },
    { group: "Tools", items: ["GitHub", "Photoshop", "Premiere Pro", "Canva", "CapCut", "Meta Ads"] },
  ],

  // ==== PROYEK ====
  projects: [
    {
      title: "Fruit Detection (YOLOv7)",
      period: "2023",
      tags: ["AI", "Data"],
      tech: ["Python", "YOLOv7", "OpenCV"],
      summary: "Aplikasi deteksi buah; anotasi data, training & evaluasi.",
      links: { live: "#", code: "https://github.com/bernadlein" },
    },
    {
      title: "Order Management Web (AMDK)",
      period: "2022–2023",
      tags: ["Web", "Backend"],
      tech: ["Node.js", "Express", "SQL"],
      summary: "Sistem pemesanan untuk distribusi air minum dalam kemasan.",
      links: { live: "#", code: "https://github.com/bernadlein" },
    },
    {
      title: "SAP BI Simulation",
      period: "2025",
      tags: ["Data"],
      tech: ["Excel", "Data Modeling"],
      summary: "InfoObject, ETL CSV→DSO→InfoCube, laporan ala BEx.",
      links: { live: "#", code: "https://github.com/bernadlein" },
    },
  ],

  // ==== PENGALAMAN ====
  experience: [
    {
      role: "Business Owner",
      company: "Amae Group — Surabaya",
      period: "2020–2024",
      points: [
        "Pendapatan stabil ~IDR 100 jt/bulan",
        "Meta Ads & konten; kolaborasi pro player/influencer",
        "Top seller produk digital di Bukalapak",
      ],
    },
    {
      role: "Content Creator",
      company: "Kyrie Hotel; Hope Physiotherapy — Surabaya",
      period: "Jul 2024 – Sep 2024",
      points: ["Strategi konten berbasis data", "Optimasi performa via analitik & Meta Ads"],
    },
    {
      role: "IT Support",
      company: "PT Amidis Tirta Mulia — Sidoarjo",
      period: "Dec 2022 – Jun 2023",
      points: ["Bangun web order management", "Sinkron alur sistem dengan proses bisnis"],
    },
    {
      role: "Final Year Project – AI Developer",
      company: "Universitas Surabaya — Surabaya",
      period: "Jun 2023 – Dec 2023",
      points: ["Deteksi buah dengan YOLOv7; anotasi, training, evaluasi"],
    },
  ],

  // ==== PENDIDIKAN ====
  education: [{ degree: "S1 Teknik Informatika", school: "Universitas Surabaya", period: "—" }],

  // ==== SERTIFIKASI ====
  certifications: [],
};
