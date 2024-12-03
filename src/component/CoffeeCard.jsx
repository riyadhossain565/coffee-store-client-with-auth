import { FaPen } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, taste, category, photo } = coffee;

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-server-omega-inky.vercel.app/coffee/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              // updated reamainig coffee
              const remainingCoffees = coffees.filter(
                (coffee) => coffee._id !== id
              );
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="coffee_img" />
        </figure>
        <div className="card-body flex-row justify-between items-center">
          <div>
            <p className="mt-1">
              <strong>Name</strong> : {name}
            </p>
            <p className="mt-1">
              <strong>Chef</strong> : {chef}
            </p>
            <p className="mt-1">
              <strong>Supplier</strong> : {supplier}
            </p>
            <p className="mt-1">
              <strong>Taste</strong> : {taste}
            </p>
            <p className="mt-1">
              <strong>Category</strong> : {category}
            </p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical gap-2">
              <Link to={`viewCoffee/${_id}`}>
                <button className="btn rounded-lg bg-[#D2B48C] text-xl text-white">
                  <IoMdEye />
                </button>
              </Link>
              <Link to={`updateCoffee/${_id}`}>
                <button className="btn rounded-lg text-xl text-white bg-[#3C393B]">
                  <FaPen />
                </button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn rounded-lg text-xl text-white bg-[#EA4744]"
              >
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
