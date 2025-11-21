export default function Button({ label = "Ten button mac din", color = "blue", onClick }) {
  const baseStyle = "px-3 py-1 rounded text-white text-sm font-semibold transition";
  const colorStyle = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    red: "bg-red-600 hover:bg-red-700",
    amber: "bg-amber-400 hover:bg-amber-500 text-black"
  };

  return (
    <button
      className={`${baseStyle} ${colorStyle[color] || colorStyle.blue}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
