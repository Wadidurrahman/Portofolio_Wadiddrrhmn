import React from "react";
import Imgbg from "../../assets/Aset-Landingpage/pp3.png";
import Iconmedsos from "../component/Iconmedsos";
import ScrollToTop from "../component/ScrollToTop";
import Imgabout from "../../assets/Aset-Landingpage/imgabout.jpg";
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

const About = [
  { h1: "Hello I'am" },
  { part2: "Wadidur Rahman" },
  { h2: "A Frontend Developer Based In Indonesia" },
  {
    p: "Perkenalkan, Nama Saya Wadid. Saya adalah seorang penggemar Teknologi dengan minat khusus di dunia IT yaitu front-end development. Saya selalu penasaran bagaimana teknologi bekerja dan berinteraksi dengan pengguna. Semangat inilah yang mendorong saya untuk mempelajari lebih lanjut tentang pemrograman dan desain antarmuka.",
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
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-white"
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
        <div className="flex p-4">
          <div className="relative left-20 top-5">
            <img className="w-1/2 h-auto rounded-md " src={Imgabout} alt="img-element" />
          </div>
          <div className="relative w-2/4 text-left right-10 mt-8">
            {About.map((item, index) => (
              <div key={index}>
                {item.h1 && <h1 className="text-4xl font-bold">{item.h1}</h1>}
                {item.part2 && <h2 className="text-3xl font-semibold text-blue-600">{item.part2}</h2>}
                {item.h2 && <h2 className="text-2xl font-light">{item.h2}</h2>}
                {item.p && <p className="mt-4 text-lg">{item.p}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <ScrollToTop />
    </main>
  );
};

export default FullPageBackground;
