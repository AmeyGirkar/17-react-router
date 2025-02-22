import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {UserService} from "../service/userService.jsx";
import Spinner from '../loader/Loader.jsx';

const UserItem = () => {
    const [state, setState] = useState({
        loading: false,
        user: {},
        error: null
    });

    const {userId} = useParams();
    const navigate = useNavigate();

    const getAUser = async (userId) => {
        try {
            setState({...state, loading: true}) // start the spinner
            const response = await UserService.getUserById(userId);
            setState({
                ...state,
                loading: false,
                user: response.data
            });
        } catch (error) {
            setState({
                ...state,
                loading: false,
                error: error
            })
        }
    }

    useEffect(() => {
        if (userId) {
            getAUser(userId);
        }
    }, [userId]);

    const getName = (user) => {
        let names = user.name.split(" ");
        return names[0].toUpperCase().charAt(0) + names[1].toUpperCase().charAt(0);
    };

    const {loading, user, error} = state;

    const clickBack = () => {
        navigate("/users");
    };

    if (loading) {
        return <Spinner/>
    }

    if (!loading && error) {
        return <div className="bg-gray-100 p-6">
            <p className="text-red-500">{error.message}</p>
        </div>
    }

    return (
        <>
            {
                !loading && Object.keys(user).length > 0 && <div
                    className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow p-4">
                    <div className="flex flex-col items-center justify-center">
                        <div
                            className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center text-2xl font-bold rounded-full">
                            {getName(user)}
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                        <p className="text-gray-500 text-sm">Email {user.email}</p>
                        <p className="text-gray-600 text-sm mt-2">City : {user.address.city}</p>
                        <p className="text-gray-600 text-sm mt-2">Street : {user.address.street}</p>
                        <div className="mt-3">
                            <button onClick={clickBack}
                                    className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition">
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
};
export default UserItem;