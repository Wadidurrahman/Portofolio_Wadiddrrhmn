import React from "react";
import Imgbg from "../../assets/Aset-Landingpage/pp3.png";

const FullPageBackground = () => {
  return (
    <main class=" ">
      <div class="w-[500px] h-[450px] bg-[#38BDF8] rounded-full absolute top-1/2 left-[47%] transform -translate-x-1/2 -translate-y-1/2 blur-[50px]"></div>
      <section class="absolute h-full w-full top-1/4 px-64 left-50 ">
        <img class="background-image w-[95%] h-[95%] object-cover " src={Imgbg} alt="Bgimg" />
      </section>
    </main>
  );
};

export default FullPageBackground;
