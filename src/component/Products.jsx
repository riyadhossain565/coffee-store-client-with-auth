import { Link } from "react-router-dom";
import { BsCup } from "react-icons/bs";
import bgImg from "../assets/more/1.png";
import { useState } from "react";
import CoffeeCard from "./CoffeeCard";

const Products = ({ loadedCoffee }) => {
  const [coffees, setCoffees] = useState(loadedCoffee);
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }} className="h-full w-full">
      <div className="text-center my-14">
        <span>--- Sip & Savor ---</span>
        <h1 className="text-4xl rancho-font text-[#331A15] font-bold">
          Our Popular Products
        </h1>
        <Link
          to="/addCoffee"
          className="inline-flex items-center gap-2 bg-[#e3b577] px-4 py-1 border-2 border-[#331A15] my-5 hover:bg-[#F5F4F1]"
        >
          <span className="text-xl rancho-font text-[#331A15] transition-all">
            Add Coffee
          </span>
          <BsCup className="text-[#331A15] text-xl " />
        </Link>
      </div>
      {/* coffee data */}
      <div className="w-11/12 mx-auto px-10 grid md:grid-cols-2 gap-4 my-4">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
