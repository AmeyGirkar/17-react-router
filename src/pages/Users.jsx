import React, { useEffect,useState } from "react";
import {UserService} from "../service/userService.jsx";
import Spinner from "../loader/Loader.jsx";
import {Link} from "react-router-dom";

function Users() {
  const [state, setState] = useState({
    loading: false,
    users: [],
    error: null,
  });
  const getAllUsers = async () => {
    try {
      setState({ ...state, loading: true }); // start the spinner
      const response = await UserService.getAllUsers();
      setState({
        ...state,
        loading: false,
        users: response.data,
      });
    } catch (error) {
      setState({
        ...state,
        loading: false,
        error: error,
      });
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const { loading, users, error } = state;

  if (loading) {
    return <Spinner/>;
  }

  if (!loading && error) {
    return (
      <div className="bg-gray-100 p-6">
        <p className="text-red-500">{error.message}</p>
      </div>
    );
  }

  return <>
      <div className="bg-gray-100 p-6">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="w-full border-collapse">
                        <thead className="bg-blue-600 p-4 text-white">
                        <tr>
                            <th className="py-3 px-4 text-left">ID</th>
                            <th className="py-3 px-4 text-left">Name</th>
                            <th className="py-3 px-4 text-left">Email</th>
                            <th className="py-3 px-4 text-left">Street</th>
                            <th className="py-3 px-4 text-left">City</th>
                        </tr>
                        </thead>
                        <tbody className="text-gray-700">
                        {
                            !loading && !error && users.length > 0 && users.map((user) => (
                                <tr key={user.id} className="border-b hover:bg-gray-100">
                                    <td className="py-2 px-4">{user.id}</td>
                                    <td className="py-2 px-4">
                                      <Link to ={`/users/${user.id}`}>{user.name}</Link>
                                    </td>
                                    <td className="py-2 px-4">{user.email}</td>
                                    <td className="py-2 px-4">{user.address.street}</td>
                                    <td className="py-2 px-4">{user.address.city}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
  </>;
}

export default Users;
