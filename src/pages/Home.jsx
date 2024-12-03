import { useLoaderData } from "react-router-dom";
import Banner from "../component/Banner";
import Features from "../component/Features";
import FollowUs from "../component/FollowUs";
import Products from "../component/Products";

const Home = () => {
  const loadedCoffee = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <Products loadedCoffee={loadedCoffee}></Products>
      <FollowUs></FollowUs>
    </div>
  );
};

export default Home;
