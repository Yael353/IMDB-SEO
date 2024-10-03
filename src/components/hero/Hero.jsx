import React from "react";

function Hero() {
  return (
    <div className="relative">
      <div className="max-h-[600px] w-full">
        <img src="/img/hero/hero.jpg" alt="Watching a movie" />
      </div>
      <div className="absolute text-white top-4 left-4">
        <h1
          className=" text-5xl font-semibold "
          style={{ textShadow: "1px 1px green" }}
        >
          The Movie DB
        </h1>
        <p className="max-w-[400px] pt-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          veritatis, ab quasi aut animi nam, consectetur molestias est repellat
          quidem exercitationem fuga iste eum, illum earum qui. 
        </p>
        {/**call to action */}
        <button className="border px-6 py-2 bg-white text-black uppercase tracking-wider mt-6 font-semibold">Something here</button>
      </div>
    </div>
  );
}

export default Hero;
