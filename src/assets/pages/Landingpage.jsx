import React from "react";
import Imgbg from "../../assets/Aset-Landingpage/pp3.png";
import Iconmedsos from "../component/Iconmedsos";

const fontStyles = `
@import url('https://fonts.googleapis.com/css2?family=Italianno&family=Kaushan+Script&display=swap');

  .judul {
    font-family: "Italianno", cursive;
  }
`;

const Judul = {
  isi: "Hey,",
  isi2: "there",
};

const page2 = [{ Headline: "About Me", Discripsi: "awdqwkkejqaw" }];

const FullPageBackground = () => {
  return (
    <main>
      <section className="relative h-screen">
        <style>{fontStyles}</style>
        <div className="w-[500px] h-[450px] bg-[#38BDF8] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-[50px]"></div>
        <div className="absolute flex justify-center items-center gap-48 mt-20 z-10 left-[47%] transform -translate-x-1/2">
          <h1 className="text-9xl judul">{Judul.isi}</h1>
          <h1 className="text-9xl judul">{Judul.isi2}</h1>
        </div>
        <section className="absolute h-full w-full top-[1%] px-64 left-50 z-50">
          <img className="background-image w-full h-full object-cover" src={Imgbg} alt="Bgimg" />
          <div style={{ position: "fixed", bottom: "60px", left: "48px", zIndex: 1000 }}>
            <Iconmedsos />
          </div>
        </section>
      </section>
      <section className="relative mt-20 ">
        {page2.map((item, index) => (
          <div key={index}>
            {item.Headline && <h2 className="text-3xl font-bold text-center">{item.Headline}</h2>}
            {item.Discripsi && <p>{item.Discripsi}</p>}
          </div>
        ))}
      </section>
    </main>
  );
};

export default FullPageBackground;
