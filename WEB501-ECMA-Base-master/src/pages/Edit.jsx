import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    axios
      .get(`http://localhost:3001/tours/${id}`)
      .then((res) => {
        setTour(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Không tìm thấy tour");
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTour({ ...tour, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/tours/${id}`, tour);
      toast.success("Cập nhật thành công!");
      navigate("/"); // quay về danh sách
    } catch (err) {
      toast.error("Có lỗi khi cập nhật");
    }
  };

  if (loading) return <p className="p-6">Đang tải dữ liệu...</p>;
  if (!tour) return <p className="p-6">Không có dữ liệu tour</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Chỉnh sửa tour</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Tên tour</label>
          <input
            name="name"
            value={tour.name}
            onChange={handleChange}
            className="border px-3 py-2 w-full"
          />
        </div>

        <div>
          <label className="block">Điểm đến</label>
          <input
            name="destination"
            value={tour.destination}
            onChange={handleChange}
            className="border px-3 py-2 w-full"
          />
        </div>

        <div>
          <label className="block">Thời gian</label>
          <input
            name="duration"
            value={tour.duration}
            onChange={handleChange}
            className="border px-3 py-2 w-full"
          />
        </div>

        <div>
          <label className="block">Giá</label>
          <input
            type="number"
            name="price"
            value={tour.price}
            onChange={handleChange}
            className="border px-3 py-2 w-full"
          />
        </div>

        <div>
          <label className="block">Mô tả</label>
          <textarea
            name="description"
            value={tour.description}
            onChange={handleChange}
            className="border px-3 py-2 w-full"
          />
        </div>

        <div>
          <label className="block">Ảnh (URL)</label>
          <input
            name="image"
            value={tour.image}
            onChange={handleChange}
            className="border px-3 py-2 w-full"
          />
        </div>

        <div>
          <label className="block">Số lượng còn lại</label>
          <input
            type="number"
            name="available"
            value={tour.available}
            onChange={handleChange}
            className="border px-3 py-2 w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Lưu
        </button>
      </form>
    </div>
  );
}

export default EditPage;