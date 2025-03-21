import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="w-full p-4 bg-gray-900 shadow-lg  flex items-center justify-center space-x-6 border-t border-gray-700 backdrop-blur-md bg-opacity-80"
    >
      <p className="text-blue-400 text-sm">&copy; 2024 Futuristic UI. All rights reserved.</p>
      <div className="flex space-x-4">
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="#" className="text-blue-400 hover:text-white transition-all duration-300">
          <FaGithub size={20} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="#" className="text-blue-400 hover:text-white transition-all duration-300">
          <FaTwitter size={20} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="#" className="text-blue-400 hover:text-white transition-all duration-300">
          <FaLinkedin size={20} />
        </motion.a>
      </div>
    </motion.footer>
  );
};

export default Footer;