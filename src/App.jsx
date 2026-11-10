import { useRef, useState, useEffect } from "react";
import ImageHoverProfileCard from "./components/ImageHoverProfileCard/ImageHoverProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import IconCloud from './components/IconCloud/IconCloud';
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek, listCertificates } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; // <-- IMPORT MODAL
import Aurora from "./components/Aurora/Aurora";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import BinuLoader from "./components/BinuLoader/BinuLoader";
import AOS from 'aos';
import GoogleMailIcon from "/assets/google.png";
import ProfilePhoto from "/assets/IMG_20251128_080934.jpg";

import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showMoreCertificates, setShowMoreCertificates] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null); // null = modal tertutup

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  // -------------------------

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      // Ambil path tanpa hash
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-24">

        <div className="hero grid sm:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <MusicPlayer audioSrc="/portofolio/assets/lagu/letitallgo.mp3" />
            <h1 className="text-3xl sm:text-5xl font-bold mb-6">
              <ShinyText text="Hi I'm Achmad Binu Caputra Fikri" disabled={false} speed={3} className='custom-class' />
            </h1>
            <BlurText
              text="A passionate application and web developer dedicated to crafting modern, high-performance digital experiences through innovative and user-friendly solutions."
              delay={150}
              animateBy="words"
              direction="top"
              className=" mb-6"
            />
          </div>
          <div className="hero-profile w-full sm:w-auto sm:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ImageHoverProfileCard
              name="Achmad Binu Caputra Fikri"
              title="Backend Developer"
              imageUrl={ProfilePhoto}
            />
          </div>
          <div className="hero-actions flex flex-row items-center gap-4">
            <a
              href="./assets/Ach binu CV.pdf"
              download="Ach_binu_CV.pdf"
              className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors flex justify-center"
            >
              <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
            </a>

            <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors flex justify-center">
              <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
            </a>
          </div>
        </div>
        {/* tentang */}
        <div className="mt-24 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(173,216,230,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6 scroll-mt-32" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-3 sm:px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
              {/* Kolom kiri */}
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h2>

                <BlurText
                  text="Halo, perkenalkan nama saya Achmad Binu Caputra Fikri. Saya adalah siswa kelas XI jurusan Rekayasa Perangkat Lunak (RPL) di SMKN 1 Dlanggu. Saat ini, saya memiliki minat yang kuat dan sedang fokus mendalami bidang Web Development serta desain UI/UX."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                <ShinyText
                  text="Working with heart, creating with mind."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-violet-400"
                />

              </div>
            </div>

            {/* Kolom kanan */}
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <IconCloud />
            </div>
          </div>

        </div>
        <div className="tools mt-32 scroll-mt-32" id="skills">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools & Technologies</h1>
          <p className="w-full md:w-2/5 px-4 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">My Professional Skills</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-4 gap-2 sm:gap-4">

            {listTools.map((tool) => (
              <div
                key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* tentang */}

        {/* Certificates */}
        <div className="certificates mt-32 pt-10 scroll-mt-32" id="certificates">
          <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Certificates</h1>
          <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">My Professional Certifications</p>
          <div className="certificates-box mt-14" style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
            <ChromaGrid
              items={showMoreCertificates ? listCertificates : listCertificates.slice(0, 3)}
              onItemClick={handleProjectClick}
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
            <div className="flex justify-center mt-6">
              <button
                type="button"
                onClick={() => setShowMoreCertificates((visible) => !visible)}
                aria-expanded={showMoreCertificates}
                className="group inline-flex items-center gap-2 rounded-full border border-violet-400/50 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-violet-200 transition-all hover:bg-violet-500/25 hover:border-violet-300"
              >
                <span>{showMoreCertificates ? "Sembunyikan" : "Lihat sertifikat lainnya"}</span>
                <svg
                  className={`h-5 w-5 transition-transform duration-300 ${showMoreCertificates ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Certificates */}

        {/* Proyek */}
        <div className="proyek mt-32 py-10" id="project" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"></div>
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Keterampilan, kreativitas, dan semangat saya dalam membangun pengalaman digital yang bermakna.</p>
        <div className="proyek-box mt-14" >

          <div style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true" >
            <ChromaGrid
              items={listProyek}
              className="project-grid"
              onItemClick={handleProjectClick} // Kirim fungsi untuk handle klik
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
        {/* Proyek */}


        {/* Kontak */}
        <div className="kontak mt-32 sm:p-10 p-0 scroll-mt-32" id="contact">
          <h1
            className="text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Contact Me
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Let's connect by email
          </p>

          {/* Email Button */}
          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-once="true"
          >
            <a
              href="mailto:dtrbinu@gmail.com"
              className="group relative inline-flex items-center gap-3 font-semibold bg-gradient-to-r from-slate-950 to-slate-800 hover:from-slate-900 hover:to-slate-700 p-5 px-10 rounded-full border-2 border-slate-500/70 hover:border-slate-200 transition-all duration-300 shadow-lg hover:shadow-slate-500/50 hover:scale-105"
            >
              {/* Email Icon */}
              <svg
                className="hidden"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <img
                src={GoogleMailIcon}
                alt=""
                aria-hidden="true"
                className="w-9 h-9 object-contain transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
              />
              <ShinyText
                text="Kirim Email"
                disabled={false}
                speed={3}
                className="text-lg"
                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
              />
            </a>
          </div>
        </div>
        {/* Kontak */}
      </main >

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />

      {loading && <BinuLoader ready onDone={() => setLoading(false)} />}
    </>
  )
}

export default App
