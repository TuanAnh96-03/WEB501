import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ListPage() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStudent = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/students");
        setStudents(data);
      } catch (err) {
        console.error("Lỗi:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getStudent();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Bạn có chắc chắn muốn xóa không ?")) return;
    setLoading(true);
    try {
      await axios.delete(`http://localhost:3000/students/${id}`);
      setStudents(students.filter((t) => t.id !== id));
      toast.success("Xóa thành công");
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  if (loading) {
    return <p className="p-6">Đang tải dữ liệu...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300">#</th>
              <th className="px-4 py-2 border border-gray-300">Tên</th>
              <th className="px-4 py-2 border border-gray-300">Tuổi</th>
              <th className="px-4 py-2 border border-gray-300">Môn học</th>
              <th className="px-4 py-2 border border-gray-300">Ngành học</th>
              <th className="px-4 py-2 border border-gray-300">Hành động</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">{student.id}</td>
                <td className="px-4 py-2 border border-gray-300">{student.name}</td>
                <td className="px-4 py-2 border border-gray-300">{student.age}</td>
                <td className="px-4 py-2 border border-gray-300">{student.subject}</td>
                <td className="px-4 py-2 border border-gray-300">{student.major}</td>
                <td className="px-4 py-2 border border-gray-300">
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Xóa
                  </button>
                  <button
                    onClick={() => handleEdit(student.id)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Sửa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListPage;