'use client';

import Image from 'next/image';
import { FaMapMarkerAlt, FaPhoneAlt, FaFileAlt, FaShoppingCart, FaUser } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-white shadow-md items-center">
      <div className="flex items-center space-x-4">
        <Image 
          src="/YOURLab_Logo.png" 
          alt="YOURLab_Logo" 
          width={150} 
          height={50}
        />
        <a href="#" className="flex items-center space-x-2 hover:underline text-black">
          <FaMapMarkerAlt className="text-teal-600" />
          <span>Location</span>
        </a>
      </div>
      <div className="flex space-x-4 items-center">
        <a href="#" className="flex items-center space-x-2 hover:underline text-black">
          <FaPhoneAlt className="text-teal-600" />
          <span>Need Help?</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:underline text-black">
          <FaFileAlt className="text-teal-600" />
          <span>Reports</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:underline text-black">
          <FaShoppingCart className="text-teal-600" />
          <span>Cart</span>
        </a>
        <a href="/registration" className="flex items-center space-x-2 hover:underline bg-teal-600 text-white px-4 py-2 rounded text-black">
          <FaUser />
          <span>Registration</span>
        </a>
      </div>
    </nav>
  );
}
