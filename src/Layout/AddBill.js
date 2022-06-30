import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import fetcher from './Axios.config';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';

const AddBill = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [modal, setModal] = useState(false);


    const onSubmit = data => {
        console.log(data);
        const bill = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            paidAmount: parseInt(data.amount),
        }
        const res = fetcher.post("/add-billing", bill);


        toast.success("New bill added!!", {
            position: toast.POSITION.TOP_CENTER,
        });
        reset();
    }

    return (
        <div>
            <input type="checkbox" id="add-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="add-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary">Please Add a new Bill</h3>

                    <form onSubmit={handleSubmit(onSubmit)} className=' gap-3 justify-items-center mt-5' >
                        <input type="text" placeholder='Full Name' className="input input-bordered w-full max-w-lg"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required"
                                }
                            })}
                        />
                        <p className="pl-1 pb-2">
                            {errors.name?.type === 'required' && <span className=" text-red-500">{errors.name.message}</span>}
                        </p>


                        <input type="email" placeholder='Email' className="input input-bordered w-full max-w-lg"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required"
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a Valid Email'
                                }
                            })}
                        />
                        <p className="pl-1 pb-2">
                            {errors.email?.type === 'required' && <span className=" text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className=" text-red-500">{errors.email.message}</span>}
                        </p>

                        <input type="number" placeholder='Phone' className="input input-bordered w-full max-w-lg"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: "Phone Number is required"
                                },
                                pattern: {
                                    value: /^(?:\d{2}-\d{3}-\d{3}-\d{3}|\d{11})$/,
                                    message: 'Please provide a valid phone number'
                                }
                            })}
                        />
                        <p className="pl-1 pb-2">
                            {errors.phone?.type === 'required' && <span className=" text-red-500">{errors.phone.message}</span>}
                            {errors.phone?.type === 'pattern' && <span className=" text-red-500">{errors.phone.message}</span>}
                        </p>

                        <input type="number" placeholder="Paid Amount" className="input input-bordered w-full max-w-lg"
                            {...register("amount", {
                                required: {
                                    value: true,
                                    message: "Please provide Paid amount"
                                }
                            })}
                        />
                        <p className="pl-1 pb-2">
                            {errors.amount?.type === 'required' && <span className=" text-red-500">{errors.amount.message}</span>}

                        </p>

                        <input type="submit" value="Submit" className="btn btn-primary w-full max-w-lg mt-6" />
                    </form>

                </div>
            </div>
        </div >
    );
};

export default AddBill;