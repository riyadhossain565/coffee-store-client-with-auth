import bannerImg from "../assets/more/3.png";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bannerImg})` }}
      className="w-full h-[450px] bg-cover bg-center grid md:grid-cols-2 md:items-center"
    >
      <div></div>
      <div className="mx-8">
        <h1 className="text-white rancho-font text-2xl md:text-3xl lg:text-4xl font-bold">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p className="text-white my-4 text-sm md:text-base ">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className="bg-[#e3b577] border border-[#e3b577] rancho-font px-4 py-2 hover:bg-transparent hover:text-white hover:border hover:border-white transition-all">
          Learn More
        </button>
      </div>
      {/* <div className="py-14 lg:py-28 w-3/6 mx-14 lg:ml-[640px] ">
        <h1 className="text-white rancho-font text-2xl md:text-3xl lg:text-4xl font-bold">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p className="text-white my-4 text-sm md:text-base ">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className="bg-[#e3b577] rancho-font px-4 py-2 hover:bg-[#a17d4e] transition-all">
          Learn More
        </button>
      </div> */}
    </div>
  );
};

export default Banner;
