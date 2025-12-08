import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditPage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [subject, setSubject] = useState("");
  const [major, setMajor] = useState("");

  const navigate = useNavigate();
  const { id } = useParams(); 

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/students/${id}`);
        setName(data.name);
        setAge(data.age);
        setSubject(data.subject);
        setMajor(data.major);
      } catch (error) {
        toast.error("Không tìm thấy sinh viên");
      }
    };
    fetchStudent();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3000/students/${id}`, {
        name,
        age: Number(age),
        subject,
        major,
      });
      toast.success("Cập nhật thành công");
      navigate("/list");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thay đổi thông tin sinh viên</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium mb-1">Tên sinh viên</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Tuổi</label>
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Môn học</label>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            type="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Ngành học</label>
          <input
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            type="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

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

export default EditPage;