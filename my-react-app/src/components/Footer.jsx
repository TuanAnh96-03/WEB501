export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <h3 className="text-xl font-bold mb-2">VTOURIST</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            ECM - MD02887 là đơn vị cung cấp dịch vụ du lịch lữ hành Quốc tế, chuyên thị trường Mỹ, Canada, Châu Âu, Úc, Singapore - Malaysia, Thái Lan cũng như chuyên Du lịch MICE - Tổ chức Event - Teambuilding - Gala Dinner.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Liên hệ</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>📍 Trụ sở: Hà Nội, Việt Nam</li>
            <li>📞 Hotline: 01234.56789</li>
            <li>✉️ Email: 123@gmail.com</li>
            <li>🌐 Website: localhost:5173</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} VTourist. All rights reserved.
      </div>
    </footer>
  );
}