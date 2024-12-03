import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import viewCoffeeImg from "../assets/more/11.png";

const ViewCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  return (
    <div
      className="w-full py-8"
      style={{ backgroundImage: `url(${viewCoffeeImg})` }}
    >
      <div className="w-3/5 mx-auto">
        <Link to="/" className="rancho-font text-xl flex items-center gap-4">
          <FaArrowLeftLong />
          <span className="font-bold text-[#374151]"> Back to home</span>
        </Link>
      </div>
      <div className="w-3/5 mx-auto bg-[#F4F3F0] flex gap-12 items-center px-14 py-10 my-8">
        <figure>
          <img src={photo} alt="coffee_img" />
        </figure>
        <div>
          <h3 className="text-2xl font-bold rancho-font text-[#331A15] my-4">
            Niceties
          </h3>
          <p>
            <strong>Name : </strong>
            {name}
          </p>
          <p>
            <strong>Chef : </strong>
            {chef}
          </p>
          <p>
            <strong>Supplier : </strong>
            {supplier}
          </p>
          <p>
            <strong>Taste : </strong>
            {taste}
          </p>
          <p>
            <strong>Category : </strong>
            {category}
          </p>
          <p>
            <strong>Details : </strong>
            {details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewCoffee;
