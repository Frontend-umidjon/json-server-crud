import { useState } from "react";
import request from "../../api";
import { motion } from "framer-motion";

const AddUser = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    profession: "",
    age: "",
    gender: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    request.post("/users", formData)
      .then(res => {
        console.log("User added:", res.data);
        setFormData({ firstName: "", lastName: "", profession: "", age: "", gender: "" });
      })
      .catch(err => {
        console.error("Error adding user:", err);
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center min-h-screen bg-gray-900 text-white px-4 pt-8"
    >
      <h1 className="text-3xl font-bold text-blue-400 mb-6">Add New User</h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="w-full p-2 mb-3 rounded bg-gray-700 text-white" required />
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="w-full p-2 mb-3 rounded bg-gray-700 text-white" required />
        <input type="text" name="profession" value={formData.profession} onChange={handleChange} placeholder="Profession" className="w-full p-2 mb-3 rounded bg-gray-700 text-white" required />
        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" className="w-full p-2 mb-3 rounded bg-gray-700 text-white" required />
        <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 mb-3 rounded bg-gray-700 text-white" required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <motion.button
          whileHover={{ scale: 1.05 }}
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          Add User
        </motion.button>
      </form>
    </motion.section>
  );
};

export default AddUser;