import { Link } from "react-router-dom";
import addCoffeeImg from "../assets/more/11.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, chef, supplier, taste, category, details, photo };

    console.log(newCoffee);

    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div
      style={{ backgroundImage: `url(${addCoffeeImg})` }}
      className="w-full h-full pb-8"
    >
      <div className="w-3/4 mx-auto pt-8">
        <Link to="/" className="rancho-font text-xl flex items-center gap-4">
          <FaArrowLeftLong />
          <span className="font-bold text-[#374151]"> Back to home</span>
        </Link>
      </div>

      <div className="w-3/4 mx-auto bg-[#F4F3F0] p-16 my-6">
        <h2 className="font-bold text-3xl rancho-font text-center text-[#374151]">
          Add New Coffee
        </h2>
        <p className="w-5/6 mx-auto my-6 text-center">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleAddCoffee}>
          {/* row-1 */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label>
                <span className="text-xl font-bold ml-2">Name</span>
              </label>
              <div>
                <input
                  type="text"
                  name="name"
                  className="p-3 pr-8 my-2 rounded-lg w-full"
                  placeholder="Enter coffee name"
                  required
                />
              </div>
            </div>
            <div className="w-1/2">
              <label>
                <span className="text-xl font-bold ml-2">Chef</span>
              </label>
              <div>
                <input
                  type="text"
                  name="chef"
                  className="p-3 pr-8 my-2 rounded-lg w-full"
                  placeholder="Enter coffee chef"
                  required
                />
              </div>
            </div>
          </div>
          {/* row-2 */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label>
                <span className="text-xl font-bold ml-2">Supplier</span>
              </label>
              <div>
                <input
                  type="text"
                  name="supplier"
                  className="p-3 pr-8 my-2 rounded-lg w-full"
                  placeholder="Enter coffee supplier"
                  required
                />
              </div>
            </div>
            <div className="w-1/2">
              <label>
                <span className="text-xl font-bold ml-2">Taste</span>
              </label>
              <div>
                <input
                  type="text"
                  name="taste"
                  className="p-3 pr-8 my-2 rounded-lg w-full"
                  placeholder="Enter coffee taste"
                  required
                />
              </div>
            </div>
          </div>
          {/* row-3 */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label>
                <span className="text-xl font-bold ml-2">Category</span>
              </label>
              <div>
                <input
                  type="text"
                  name="category"
                  className="p-3 pr-8 my-2 rounded-lg w-full"
                  placeholder="Enter coffee category"
                  required
                />
              </div>
            </div>
            <div className="w-1/2">
              <label>
                <span className="text-xl font-bold ml-2">Details</span>
              </label>
              <div>
                <input
                  type="text"
                  name="details"
                  className="p-3 pr-8 my-2 rounded-lg w-full"
                  placeholder="Enter coffee details"
                  required
                />
              </div>
            </div>
          </div>
          {/* row-4 */}
          <div className="flex">
            <div className="w-full">
              <label>
                <span className="text-xl font-bold ml-2">Photo</span>
              </label>
              <div>
                <input
                  type="text"
                  name="photo"
                  className="p-3 pr-8 my-2 rounded-lg w-full"
                  placeholder="Enter photo URL"
                  required
                />
              </div>
            </div>
          </div>
          {/* button */}

          <input
            type="submit"
            value="Add Coffee"
            className="w-full py-2 rounded-lg border border-black mt-3 bg-[#D2B48C] cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
