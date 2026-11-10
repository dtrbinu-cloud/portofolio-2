import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools6 from "/assets/tools/js.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools18 from "/assets/tools/vite.png";
import Tools19 from "/assets/tools/mysql.png";
import Tools20 from "/assets/tools/php.png";

const LaravelIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg";

// Certificate images
import Cert1 from "/assets/UIUX smk telkom.jpg";
import Cert2 from "/assets/Harapan 2 IoT_Achmad Binu Caputra.png";
import Cert3 from "/assets/ONL259OQ9W_page-0001.jpg";
import CertPlaceholder from "/assets/question_mark.svg";


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },

  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },

  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },



  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },

  {
    id: 14,
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },

  {
    id: 18,
    gambar: Tools18,
    nama: "Vite",
    ket: "Framework",
    dad: "1800",
  },
  {
    id: 19,
    gambar: Tools19,
    nama: "MySql",
    ket: "Framework",
    dad: "1900",
  },
  {
    id: 20,
    gambar: Tools20,
    nama: "PHP",
    ket: "Language",
    dad: "2000",
  },
  {
    id: 21,
    gambar: LaravelIcon,
    nama: "Laravel",
    ket: "Framework",
    dad: "2100",
  },
];

import Proyek1 from "/assets/figma eskul.png";
import Proyek2 from "/assets/myporto.png";
import Proyek3 from "/assets/smartgreenhouse.jpeg";
import Proyek4 from "/assets/proyek/proyek4.jpg";
import Proyek5 from "/assets/proyek/proyek5.jpg";
import Proyek6 from "/assets/proyek/proyek6.jpg";
import IceWatchAssistant from "/assets/ice-watch-assistant.png";
import TaskManagement from "/assets/task-management.png";
import Engpersona from "/assets/engpersona.png";
import Skorly from "/assets/skorly.png";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "Figma Eskul",
    subtitle: "Extracurricular UI/UX Design Project",
    fullDescription: "A design project created for the school extracurricular activities, showcasing UI/UX principles using Figma.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rissss21",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "My Portfolio",
    subtitle: "Personal Web Portfolio",
    fullDescription: "My personal portfolio website showcasing my projects and skills.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/rissss21",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Smart Greenhouse",
    subtitle: "IoT-based Agriculture System",
    fullDescription: "An IoT-based greenhouse system that monitors and controls environmental conditions for optimal plant growth.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rissss21",
    dad: "300",
  },
  {
    id: 4,
    image: IceWatchAssistant,
    title: "Ice Watch Assistant",
    subtitle: "Dashboard Monitoring Suhu dan Kelembapan",
    fullDescription: "Dashboard untuk memantau suhu, kelembapan, dan kondisi ruang secara realtime.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "",
    dad: "400",
  },
  {
    id: 5,
    image: TaskManagement,
    title: "Tugas PKL Task Management",
    subtitle: "Aplikasi Manajemen Tugas",
    fullDescription: "Aplikasi untuk mengelola proyek, mengatur prioritas, dan menyelesaikan tugas dengan lebih teratur.",
    borderColor: "#7C3AED",
    gradient: "linear-gradient(145deg, #7C3AED, #000)",
    url: "",
    dad: "500",
  },
  {
    id: 6,
    image: Engpersona,
    title: "Engpersona",
    subtitle: "Platform Belajar Bahasa Inggris",
    fullDescription: "Platform belajar bahasa Inggris interaktif dengan materi, level pembelajaran, dan misi harian.",
    borderColor: "#2563EB",
    gradient: "linear-gradient(145deg, #2563EB, #000)",
    url: "",
    dad: "600",
  },
  {
    id: 7,
    image: Skorly,
    title: "Skorly.id",
    subtitle: "Platform Ujian Digital",
    fullDescription: "Platform ujian digital untuk membantu guru membuat ruang ujian, membagikan token, dan melihat hasil penilaian secara otomatis.",
    borderColor: "#2563eb",
    gradient: "linear-gradient(145deg, #2563eb, #000)",
    url: "",
    dad: "700",
  },

];

export const listCertificates = [
  {
    id: 1,
    image: Cert1,
    title: "UI/UX Design",
    subtitle: "SMK Telkom Malang",
    fullDescription: "Certificate of participation/completion in UI/UX Design training at SMK Telkom Malang.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "#",
    dad: "100",
  },
  {
    id: 2,
    image: Cert2,
    title: "IoT Specialist",
    subtitle: "Harapan 2 Achievement",
    fullDescription: "Awarded Harapan 2 for IoT innovation by Achmad Binu Caputra.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "#",
    dad: "200",
  },
  {
    id: 3,
    image: Cert3,
    title: "Sertifikat Apresiasi",
    subtitle: "Microsoft Elevate & Dicoding",
    fullDescription: "Sertifikat apresiasi dari Microsoft Elevate dan Dicoding setelah menyelesaikan sesi pembelajaran Online Short Course tentang strategic leadership.",
    borderColor: "#0ea5e9",
    gradient: "linear-gradient(145deg, #0ea5e9, #000)",
    url: "#",
    dad: "300",
  },
  {
    id: 4,
    image: CertPlaceholder,
    title: "Coming Soon",
    subtitle: "New Achievement",
    fullDescription: "Stay tuned for more updates!",
    borderColor: "#333",
    gradient: "linear-gradient(145deg, #333, #000)",
    url: "#",
    dad: "400",
  },
  {
    id: 5,
    image: CertPlaceholder,
    title: "Coming Soon",
    subtitle: "New Achievement",
    fullDescription: "Stay tuned for more updates!",
    borderColor: "#333",
    gradient: "linear-gradient(145deg, #333, #000)",
    url: "#",
    dad: "500",
  },
  {
    id: 6,
    image: CertPlaceholder,
    title: "Coming Soon",
    subtitle: "New Achievement",
    fullDescription: "Stay tuned for more updates!",
    borderColor: "#333",
    gradient: "linear-gradient(145deg, #333, #000)",
    url: "#",
    dad: "600",
  },
];
