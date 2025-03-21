import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4"
    >
      <h1 className="text-4xl font-bold text-blue-400 mb-4">Welcome to Futuristic UI</h1>
      <p className="text-lg text-gray-400 text-center max-w-xl">
        Experience a modern and sleek interface designed for efficiency and style.
      </p>
    </motion.section>
  );
};

export default Home;