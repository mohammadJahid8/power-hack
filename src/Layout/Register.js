import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import fetcher from "./Axios.config";

function Register() {
    let navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        try {
            const response = await fetcher.post("/registration", data);
            console.log(response);
            toast.success("Login Success!!", {
                position: toast.POSITION.TOP_CENTER,
            });

        } catch (error) {

        }
        reset();
        console.log(data);
    };


    return (
        <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">

                <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
                    Register to your account
                </h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                    <form
                        className="space-y-6"
                        onSubmit={handleSubmit(onSubmit)}

                    >
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                User Name
                            </label>
                            <div className="mt-1">
                                <input
                                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    id="name"
                                    name="username"
                                    type="text"

                                    {...register("username", {
                                        required: true,

                                    })}
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="current-email"
                                    {...register("email", {
                                        required: true,

                                        pattern: /\S+@\S+\.\S+/,
                                    })}
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    {...register("password", {
                                        required: true,
                                    })}
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none"
                            >
                                Sign Up
                            </button>
                        </div>
                        <p>
                            Already Have an Account?{" "}
                            <Link
                                to="/login"
                                className="font-semibold text-indigo-600 hover:text-indigo-500"
                            >
                                Sign in
                            </Link>
                        </p>
                    </form>
                    {/*<SocialLogin/>*/}
                </div>
            </div>
        </div>
    );
}
export default Register;