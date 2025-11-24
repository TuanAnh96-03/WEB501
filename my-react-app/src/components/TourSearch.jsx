
import { useState } from "react";

export default function AdvancedTourSearch({ onSearch }) {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [budget, setBudget] = useState(5000000);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ departure, destination, date, duration, budget });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 space-y-6 w-full">
      <h3 className="text-2xl font-bold text-blue-700 text-center">TÌM KIẾM TOUR</h3>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Điểm khởi hành</label>
        <select
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Chọn điểm khởi hành</option>
          <option value="Hà Nội">Hà Nội</option>
          <option value="Hồ Chí Minh">Hồ Chí Minh</option>
          <option value="Đà Nẵng">Đà Nẵng</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Điểm đến</label>
        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Chọn điểm đến</option>
          <option value="Sapa">Sapa</option>
          <option value="Nha Trang">Nha Trang</option>
          <option value="Đà Lạt">Đà Lạt</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Ngày khởi hành</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Số ngày</label>
        <select
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Chọn số ngày</option>
          <option value="1-2">1–2 ngày</option>
          <option value="5-8">5–8 ngày</option>
          <option value="14+">Trên 14 ngày</option>
          <option value="other">Khác...</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Ngân sách của quý khách</label>
        <input
          type="range"
          min="0"
          max="1000000000"
          step="1000000"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full"
        />
        <div className="text-right text-sm text-gray-600 mt-1">{budget.toLocaleString()} ₫</div>
      </div>
      <div className="text-center pt-2">
        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 font-semibold"
        >
          TÌM KIẾM TOUR
        </button> 
      </div>
    </form>
  );
}