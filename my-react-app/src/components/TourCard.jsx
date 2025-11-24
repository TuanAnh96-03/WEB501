import Button from "./Button";

export default function TourCard({ name, image, destination, price }) {
  return (
    <div className="w-[280px] bg-white border rounded-lg shadow-md overflow-hidden">
      <div className="h-48 w-full overflow-hidden group">
  <img
    src={image}
    alt={name}
    className="w-full h-full object-cover transform transition duration-300 group-hover:scale-105 group-hover:brightness-90"
  />
</div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 font-bold">{destination}</p>
        <p className="text-red-500 font-bold mt-2">{price} VND</p>
        <div className="mt-4 flex gap-2">
          <Button label="Chi tiết" color="blue" />
          <Button label="Đặt tour" color="green" />
        </div>
      </div>
    </div>
  );
}