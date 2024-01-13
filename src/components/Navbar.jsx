import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className="p-6 gap-8 flex justify-start bg-gradient-to-r from-cyan-500 to-blue-500 text-xl text-white font-bold ">
      <div className="ml-16">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${
              isActive ? "text-orange-700" : "text-gray-950"
            } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }
        >
          Market
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${
              isActive ? "text-orange-700" : "text-gray-950"
            } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }
        >
          Cart
          <FontAwesomeIcon icon={faCartShopping} />
          <span>(0)</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar