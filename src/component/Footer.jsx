import { Link } from "react-router-dom";
import footerImg from "../assets/more/13.jpg";
import logo from "../assets/more/logo1.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      style={{ backgroundImage: `url(${footerImg})` }}
      className="grid grid-cols-1 md:grid-cols-2 px-20 py-14"
    >
      <div className="w-11/12 mx-auto">
        <img className="w-14 h-16 my-4" src={logo} alt="Logo Image" />
        <Link to="/" className="text-3xl font-bold rancho-font text-[#331A15]">
          Espresso Emporium
        </Link>
        <p className="text-md my-6">
          Always ready to be your friend. Come & Contact with us to share your
          memorable moments, to share with your best companion.
        </p>
        <div className="flex gap-4 items-center text-4xl text-[#331A15]">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
        <h2 className="text-2xl text-[#331A15] rancho-font py-6 font-bold">
          Get in Touch
        </h2>
        <div className="flex gap-4 items-center mb-4">
          <FaPhoneAlt className="text-[#331A15]" />
          <p>+88 01533 333 333</p>
        </div>
        <div className="flex gap-4 items-center mb-4">
          <MdEmail className="text-[#331A15]" />
          <p>info@gmail.com</p>
        </div>
        <div className="flex gap-4 items-center mb-4">
          <FaLocationDot className="text-[#331A15]" />
          <p>72, Wall street, King Road, Dhaka</p>
        </div>
      </div>
      <div className="px-4">
        <h2 className="text-2xl text-[#331A15] rancho-font py-6 font-bold ">
          Connect With Us
        </h2>
        <input
          type="text"
          placeholder="Name"
          className="px-6 py-4 w-full outline-none rounded-lg border focus:border-[#331A15] focus:shadow-xl"
        />
        <input
          type="email"
          placeholder="Email"
          className="px-6 py-4 w-full my-6 outline-none rounded-lg border focus:border-[#331A15] focus:shadow-xl"
        />
        <textarea
          name=""
          placeholder="Message"
          className="h-28 w-full py-4 px-6 outline-none rounded-lg border focus:border-[#331A15] focus:shadow-xl"
        ></textarea>
        <button className="px-8 py-3 bg-transparent rancho-font font-bold text-[#331A15] border-2 border-[#331A15] rounded-full my-4 hover:bg-[#331A15] hover:text-white transition-all">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Footer;
