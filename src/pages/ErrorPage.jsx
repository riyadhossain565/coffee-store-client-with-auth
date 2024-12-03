import { Link } from "react-router-dom";
import errorImg from "../assets/404/404.gif";
import { FaArrowLeftLong } from "react-icons/fa6";

const ErrorPage = () => {
  return (
    <div>
      <Link
        to="/"
        className="rancho-font text-xl flex items-center justify-center gap-4 mt-8"
      >
        <FaArrowLeftLong />
        <span className="font-bold text-[#374151]"> Back to home</span>
      </Link>
      <div className="flex justify-center">
        <img src={errorImg} alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
