import { useState } from "react";

function AddPage() {
  const [tour, setTour] = useState({
    id: "",
    name: "",
    destination: "",
    duration: "",
    price: "",
    image: "",
    description: "",
    available: "",
  });

  const handleChange = (e) => {
    setTour({
      ...tour,
      [e.target.name]: e.target.value 
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tour mới:", tour);
    alert ("Thêm thành công");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm mới</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Text input */}
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Tên tour
          </label>
          <input
            value={tour.name}
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="destination" className="block font-medium mb-1">
            Điểm đến
          </label>
          <input
            value={tour.destination}
            onChange={handleChange}
            type="text"
            id="destination"
            name="destination"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="duration" className="block font-medium mb-1">
            Thời gian
          </label>
          <input
            value={tour.duration}
            onChange={handleChange}
            type="text"
            id="duration"
            name="duration"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="price" className="block font-medium mb-1">
            Giá Tour
          </label>
          <input
            value={tour.price}
            onChange={handleChange}
            type="number"
            id="price"
            name="price"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="image" className="block font-medium mb-1">
            Hình ảnh
          </label>
          <input
            value={tour.image}
            onChange={handleChange}
            type="text"
            id="image"
            name="image"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="block font-medium mb-1">
            Mô tả
          </label>
          <input
            value={tour.description}
            onChange={handleChange}
            type="text"
            id="description"
            name="description"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="available" className="block font-medium mb-1">
            Số lượng
          </label>
          <input
            value={tour.available}
            onChange={handleChange}
            type="number"
            id="available"
            name="available"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>



        {/* Checkbox list */}
        {/* <div>
          <label className="block font-medium mb-1">Checkbox</label>
          <div className="flex items-center space-x-2 mb-2">
            <input type="checkbox" id="flexCheck1" className="h-4 w-4 text-blue-600 rounded border-gray-300" />
            <label htmlFor="flexCheck1" className="text-gray-700">checkbox 1</label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="flexCheck2" className="h-4 w-4 text-blue-600 rounded border-gray-300" />
            <label htmlFor="flexCheck2" className="text-gray-700">checkbox 2</label>
          </div>
        </div> */}

        {/* Radio list */}
        {/* <div>
          <label className="block font-medium mb-1">Radio</label>
          <div className="flex items-center space-x-2 mb-2">
            <input type="radio" name="flexRadioDefault" id="flexRadio1" className="h-4 w-4 text-blue-600" />
            <label htmlFor="flexRadio1" className="text-gray-700">Radio 1</label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="radio" name="flexRadioDefault" id="flexRadio2" className="h-4 w-4 text-blue-600" />
            <label htmlFor="flexRadio2" className="text-gray-700">Radio 2</label>
          </div>
        </div> */}

        {/* Select */}
        {/* <div>
          <label htmlFor="selectOption" className="block font-medium mb-1">
            Select - option
          </label>
          <select
            id="selectOption"
            className="w-full border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div> */}

        {/* Submit button */}
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddPage;