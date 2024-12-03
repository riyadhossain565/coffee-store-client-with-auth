import icon1 from "../assets/icons/1.png";
import icon2 from "../assets/icons/2.png";
import icon3 from "../assets/icons/3.png";
import icon4 from "../assets/icons/4.png";

const Features = () => {
  return (
    <div className="bg-[#ECEAE3]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12 mx-auto py-10 px-10">
        <div>
          <img src={icon1} alt="" />
          <h3 className="text-2xl rancho-font my-2">Awesome Aroma</h3>
          <p className="text-md">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src={icon2} alt="" />
          <h3 className="text-2xl rancho-font my-2">High Quality</h3>
          <p className="text-md">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div>
          <img src={icon3} alt="" />
          <h3 className="text-2xl rancho-font my-2">Pure Grades</h3>
          <p className="text-md">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div>
          <img src={icon4} alt="" />
          <h3 className="text-2xl rancho-font my-2">Proper Roasting</h3>
          <p className="text-md">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
