import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaUsers, FaUserPlus } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full p-4 bg-gray-900 shadow-lg  flex items-center justify-center space-x-8 border-b border-gray-700 backdrop-blur-md bg-opacity-80">
      <nav className="flex space-x-6">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to={'/'} className="flex items-center space-x-2 text-blue-400 hover:text-white transition-all duration-300 text-lg font-semibold px-4 py-2 rounded-lg hover:bg-blue-500">
            <FaHome size={20} /> <span>Home</span>
          </Link>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to={'/users'} className="flex items-center space-x-2 text-blue-400 hover:text-white transition-all duration-300 text-lg font-semibold px-4 py-2 rounded-lg hover:bg-blue-500">
            <FaUsers size={20} /> <span>Users</span>
          </Link>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to={'/add-user'} className="flex items-center space-x-2 text-blue-400 hover:text-white transition-all duration-300 text-lg font-semibold px-4 py-2 rounded-lg hover:bg-blue-500">
            <FaUserPlus size={20} /> <span>Add User</span>
          </Link>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
