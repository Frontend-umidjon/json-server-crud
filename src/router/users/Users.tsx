import { useEffect, useState } from "react";
import request from "../../api";
import { IUser } from "../../types";
import { motion } from "framer-motion";

const Users = () => {
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [editingUser, setEditingUser] = useState<IUser | null>(null);
  const [editedName, setEditedName] = useState("");

  useEffect(() => {
    request.get("/users").then((res) => {
      setUsers(res.data);
    }).catch((err) => {
      console.log("Error fetching users", err);
    });
  }, []);

  const handleDelete = (id: number) => {
    request.delete(`/users/${id}`).then(() => {
      if (users) {
        const newUsers = users.filter(user => user.id !== id);
        setUsers(newUsers);
      }
    }).catch((err) => {
      console.log("Error deleting user", err);
    });
  };

  const handleEdit = (user: IUser) => {
    setEditingUser(user);
    setEditedName(user.firstName);
  };

  const handleSaveEdit = () => {
    if (editingUser && editedName) {
      request.put(`/users/${editingUser.id}`, { firstName: editedName }).then(() => {
        if (users) {
          const updatedUsers = users.map(user => {
            if (user.id === editingUser.id) {
              return { ...user, firstName: editedName };
            }
            return user;
          });
          setUsers(updatedUsers);
        }
        setEditingUser(null);
      }).catch((err) => {
        console.log("Error updating user", err);
      });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center min-h-screen bg-gray-900 text-white px-4 pt-8"
    >
      <h1 className="text-3xl font-bold text-blue-400 mb-6">Users List</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl p-6 rounded-lg">
        {users?.map((user) => (
          <motion.div
            key={user.id}
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-gray-800 rounded-lg shadow-lg text-lg text-blue-300 border border-gray-700"
          >
            {editingUser?.id === user.id ? (
              <div>
                <input 
                  type="text" 
                  value={editedName} 
                  onChange={(e) => setEditedName(e.target.value)} 
                  className="p-2 text-black rounded-md w-full"
                />
                <button 
                  onClick={handleSaveEdit} 
                  className="mt-2 px-3 py-1 text-sm bg-green-500 text-white rounded-md hover:bg-green-600"
                >Save</button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-semibold text-white">{user.firstName} {user.lastName}</h2>
                <p className="text-sm text-gray-400">{user.profession}</p>
                <p className="text-sm text-gray-400">{user.age} years old</p>
                <p className="text-sm text-gray-400">{user.gender}</p>
                <div className="flex justify-between mt-3">
                  <button 
                    onClick={() => handleEdit(user)} 
                    className="px-3 py-1 text-sm bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                  >Edit</button>
                  <button 
                    onClick={() => handleDelete(user.id)} 
                    className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600"
                  >Delete</button>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Users;
