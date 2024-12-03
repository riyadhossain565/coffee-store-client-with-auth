import figureImg1 from "../assets/cups/Rectangle 9.png";
import figureImg2 from "../assets/cups/Rectangle 10.png";
import figureImg3 from "../assets/cups/Rectangle 11.png";
import figureImg4 from "../assets/cups/Rectangle 12.png";
import figureImg5 from "../assets/cups/Rectangle 13.png";
import figureImg6 from "../assets/cups/Rectangle 14.png";
import figureImg7 from "../assets/cups/Rectangle 15.png";
import figureImg8 from "../assets/cups/Rectangle 16.png";

const FollowUs = () => {
  return (
    <div className=" w-11/12 mx-auto px-10 my-6">
      <div className="text-center my-8">
        <span>Follow Us Now</span>
        <h1 className="text-4xl rancho-font text-[#331A15] font-bold">
          Follow on Instagram
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <figure className="overflow-hidden">
          <img
            className="w-72 h-64 object-cover rounded-lg transition-all hover:scale-125"
            src={figureImg1}
            alt="Photo of Coffee"
          />
        </figure>
        <figure className="overflow-hidden">
          <img
            className="w-72 h-64 object-cover rounded-lg transition-all hover:scale-125"
            src={figureImg2}
            alt="Photo of Coffee"
          />
        </figure>
        <figure className="overflow-hidden">
          <img
            className="w-72 h-64 object-cover rounded-lg transition-all hover:scale-125"
            src={figureImg3}
            alt="Photo of Coffee"
          />
        </figure>
        <figure className="overflow-hidden">
          <img
            className="w-72 h-64 object-cover rounded-lg transition-all hover:scale-125"
            src={figureImg4}
            alt="Photo of Coffee"
          />
        </figure>
        <figure className="overflow-hidden">
          <img
            className="w-72 h-64 object-cover rounded-lg transition-all hover:scale-125"
            src={figureImg5}
            alt="Photo of Coffee"
          />
        </figure>
        <figure className="overflow-hidden">
          <img
            className="w-72 h-64 object-cover rounded-lg transition-all hover:scale-125"
            src={figureImg6}
            alt="Photo of Coffee"
          />
        </figure>
        <figure className="overflow-hidden">
          <img
            className="w-72 h-64 object-cover rounded-lg transition-all hover:scale-125"
            src={figureImg7}
            alt="Photo of Coffee"
          />
        </figure>
        <figure className="overflow-hidden">
          <img
            className="w-72 h-64 object-cover rounded-lg transition-all hover:scale-125"
            src={figureImg8}
            alt="Photo of Coffee"
          />
        </figure>
      </div>
    </div>
  );
};

export default FollowUs;
