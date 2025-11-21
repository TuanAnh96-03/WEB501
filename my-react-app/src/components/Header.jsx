import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white text-blue-600 shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">VTourist</h1>
        <nav>
          <ul className="flex space-x-6 text-blue-600 font-semibold text-sm uppercase">
            <li><Link to="/" className="hover:text-orange-500 transition">Tour Nội Địa</Link></li>
            <li><Link to="/tour-quoc-te" className="hover:text-orange-500 transition">Tour quốc tế</Link></li>
            <li><Link to="/tu-van" className="hover:text-orange-500 transition">Dịch vụ tư vấn VISA</Link></li>
            <li><Link to="/mice" className="hover:text-orange-500 transition">MICE - Teambuilding</Link></li>
            <li><Link to="/gioi-thieu" className="hover:text-orange-500 transition">Giới thiệu</Link></li>
            <li><Link to="/tin-tuc" className="hover:text-orange-500 transition">Tin tức</Link></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;