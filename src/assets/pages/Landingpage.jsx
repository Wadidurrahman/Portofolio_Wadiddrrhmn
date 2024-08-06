import React from "react";
import Imgbg from "../../assets/Aset-Landingpage/pp3.png";
import Iconmedsos from "../component/Iconmedsos";
import ScrollToTop from "../component/ScrollToTop";
import Imgabout from "../../assets/Aset-Landingpage/imgabout.jpg";
import Cardabout from "../component/Cardabout";
import IsiTech from "../component/IsiTech";
import CardProject from "../component/CardProject/ElementCard";
import Discripsi from "../component/ComponentExsperion/Intro";
import IsiContact from "../component/ComponentContact/IsiContact";
import Service from "../component/Componentservic/Service";
// import JudulPerpage from "../component/JudulPerpage";
// import Bg3 from "../../assets/Aset-Landingpage/bg3.jpg";

const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Italianno&family=Kaushan+Script&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bungee+Outline&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  .judul {
    font-family: "Italianno", cursive;
  }
  .page2.Headline {
    font-family: "Bungee Outline", sans-serif;
  }
`;

const Judul = {
  isi: "Hey,",
  isi2: "there",
};

const page2 = [{ Headline: "ABOUT ME" }];
const page3 = [{ Headline2: "TECH STACK & TOOLS" }];
const page4 = [{ Headline4: "PROJECTS" }];
const page5 = [{ Headline5: "EXPERIENCE" }];
const page6 = [{ Headline6: "SERVICE" }];
const page7 = [{ Headline7: "CONTACT" }];

const About = [
  { h1: "Hello I'am" },
  { part2: "Wadidur Rahman" },
  { h2: "A Frontend Developer Based In Indonesia" },
  {
    p: "Hallo Semuanya,Saya Wadid. Saya adalah seorang penggemar Teknologi dengan minat khusus di dunia programming yaitu front-end development. Saya selalu penasaran bagaimana teknologi bekerja dan berinteraksi dengan pengguna UI. Semangat inilah yang mendorong saya untuk mempelajari lebih lanjut tentang pemrograman dan desain antarmuka.",
  },
];

const FullPageBackground = () => {
  return (
    <main>
      <style>{fontStyles}</style>
      <section className="relative h-screen">
        <div className="w-[500px] h-[450px] bg-[#38BDF8] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-[50px]"></div>
        <div className="absolute flex justify-center items-center gap-48 mt-20 z-10 left-[47%] transform -translate-x-1/2 text-shadow-md">
          <h1 className="text-9xl judul">{Judul.isi}</h1>
          <h1 className="text-9xl judul">{Judul.isi2}</h1>
        </div>
        <div></div>
        <section className="absolute h-full w-full top-[1%] px-64 left-50 z-20">
          <div className="relative w-full h-full">
            <img className="absolute inset-0 w-full h-full object-cover" src={Imgbg} alt="Bgimg" />
          </div>
          <div style={{ position: "fixed", bottom: "60px", left: "48px", zIndex: 1000 }}>
            <Iconmedsos />
          </div>
        </section>
      </section>
      <section className="relative w-full h-screen flex flex-col items-center rounded-lg bg-white z-20">
        {page2.map((item, index) => (
          <div key={index} className="text-center relative mt-10">
            <h2
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-white"
              style={{
                textShadow: "2px 2px 4px rgba(158, 158, 158, 0.5)",
                transform: "skew(10deg)",
                fontFamily: "'Bungee Outline', sans-serif",
              }}
            >
              ~ About Me ~
            </h2>
            {item.Headline && <h2 className="text-3xl font-bold relative -top-8">{item.Headline}</h2>}
          </div>
        ))}
        <div className="relative justify-items-center px-36">
          <div className="flex gap-36 p-4 relative">
            <div className="absolute left-10 top-5 transform rotate-12 w-80 h-96 bg-[#b6faff] rounded-lg shadow-lg -z-10"></div>
            <div className="absolute left-14 top-10 transform rotate-6 w-80 h-96 bg-[#52eefa] rounded-lg shadow-lg -z-20"></div>
            <div className="relative">
              <img className="w-80 h-96 rounded-md" src={Imgabout} alt="img-element" />
            </div>
            <div className="relative w-2/4 text-left mt-4">
              {About.map((item, index) => (
                <div key={index} className="mb-2">
                  <div className="flex items-center">
                    {item.h1 && <h1 className="text-2xl">{item.h1}</h1>}
                    {item.part2 && <h2 className="text-3xl font-bold text-[#52eefa]">{item.part2}</h2>}
                  </div>
                  {item.h2 && (
                    <h2 className="text-lg font-light">
                      A <span className="text-[#52eefa] font-semibold">Frontend Developer</span> Based In <span className="text-[#52eefa] font-semibold">Indonesia</span>
                    </h2>
                  )}
                  {item.p && <p className=" text-sm">{item.p}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="relative bottom-32 border border-gray-400 px-[14.5rem] left-56" />
        <Cardabout />
      </section>

      <section className="relative w-full h-screen flex flex-col items-center rounded-lg bg-white z-20">
        {page3.map((item, index) => (
          <div key={index} className="text-center relative mt-10">
            <h2
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-white"
              style={{
                textShadow: "2px 2px 4px rgba(158, 158, 158, 0.5)",
                transform: "skew(10deg)",
                fontFamily: "'Bungee Outline', sans-serif",
              }}
            >
              ~ Tech Stack & Tools ~
            </h2>
            {item.Headline2 && <h2 className="text-3xl font-bold relative -top-8">{item.Headline2}</h2>}
          </div>
        ))}
        <div className="flex justify-between items-center gap-2">
          <div className="relative left-16 w-2/3 h-1/2">
            <IsiTech />
          </div>
          <div className="relative right-10 text-right">
            <h1 className="relative text-2xl text-[#38BDF8] font-bold">Tech Stack & Tools</h1>
            <p className="relative text-xs text-gray-500 w-1/2 left-52">Beberapa list yang saya gunakan saat ini, untuk menunjang kinerja saya</p>
          </div>
        </div>
      </section>
      <section className="relative w-full h-screen flex flex-col items-center rounded-lg z-20">
        {page4.map((item, index) => (
          <div key={index} className="text-center relative mt-10">
            <h2
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-white"
              style={{
                textShadow: "2px 2px 4px rgba(158, 158, 158, 0.5)",
                transform: "skew(10deg)",
                fontFamily: "'Bungee Outline', sans-serif",
              }}
            >
              ~ Projects ~
            </h2>
            {item.Headline4 && <h2 className="text-3xl font-bold relative -top-8">{item.Headline4}</h2>}
          </div>
        ))}
        <div className="relative px-36">
          <CardProject />
        </div>
      </section>
      <section className="relative w-full h-screen flex flex-col items-center rounded-lg z-10">
        {page5.map((item, index) => (
          <div key={index} className="text-center relative mt-10">
            <h2
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-white"
              style={{
                textShadow: "2px 2px 4px rgba(158, 158, 158, 0.5)",
                transform: "skew(10deg)",
                fontFamily: "'Bungee Outline', sans-serif",
              }}
            >
              ~ Exsperience ~
            </h2>
            {item.Headline5 && <h2 className="text-3xl font-bold relative -top-8">{item.Headline5}</h2>}
          </div>
        ))}
        <div>
          <Discripsi />
        </div>
      </section>
      <section className="relative w-full h-screen flex flex-col items-center mt-8  z-10">
        {page6.map((item, index) => (
          <div key={index} className="text-center relative mt-10">
            <h2
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-white"
              style={{
                textShadow: "2px 2px 4px rgba(158, 158, 158, 0.5)",
                transform: "skew(10deg)",
                fontFamily: "'Bungee Outline', sans-serif",
              }}
            >
              ~ SERVICE ~
            </h2>
            {item.Headline6 && <h2 className="text-3xl font-bold relative -top-8 ">{item.Headline6}</h2>}
          </div>
        ))}
        <div>
          <Service />
        </div>
      </section>
      <section className="relative w-full h-screen flex flex-col items-center rounded-lg mt-8 z-10">
        {page7.map((item, index) => (
          <div key={index} className="text-center relative mt-10">
            <h2
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-white"
              style={{
                textShadow: "2px 2px 4px rgba(158, 158, 158, 0.5)",
                transform: "skew(10deg)",
                fontFamily: "'Bungee Outline', sans-serif",
              }}
            >
              ~ Contact ~
            </h2>
            {item.Headline7 && <h2 className="text-3xl font-bold relative -top-8">{item.Headline7}</h2>}
          </div>
        ))}
        <div>
          <IsiContact />
        </div>
      </section>
      <ScrollToTop />
    </main>
  );
};

export default FullPageBackground;
