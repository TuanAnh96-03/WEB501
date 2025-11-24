export default function Banner({ image }) {
  return (
    <div className="w-full overflow-hidden mb-6 rounded-lg shadow-md">
      <img
        src={image}
        alt="Banner"
        className="w-full h-auto object-cover"
            />
    </div>
  );
}