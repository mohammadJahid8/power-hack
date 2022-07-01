import React from 'react';
import AddBill from './AddBill';
import Bills from './Bills';

const BillTable = () => {
    const handleOnChange = () => {

    }

    return (
        <div className='mx-14'>
            <div className='bg-gray-200 rounded-md mb-4'>
                <div class="navbar">
                    <div class="flex-1">
                        <a class="btn btn-ghost normal-case text-lg">Billings</a>
                        <div class="form-control">
                            <input type="text" placeholder="Search" class="py-1 pl-2 rounded pr-24" />
                        </div>
                    </div>


                    <div class="flex-none">
                        <label
                            // disabled={slots.length === 0}
                            // onClick={() => setTreatment(service)}
                            htmlFor="add-modal"
                            className="bg-green-300 p-2 rounded hover:bg-green-400 cursor-pointer normal-case text-lg">Add New Item
                        </label>
                        {/* <h2 className='bg-green-300 p-2 rounded hover:bg-green-400 cursor-pointer normal-case text-lg'>Add New Item</h2> */}
                    </div>

                    {/* <div className="card-actions justify-center">

                        <label
                            // disabled={slots.length === 0}
                            // onClick={() => setTreatment(service)}
                            htmlFor="add-modal"
                            className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Book Appointment
                        </label>
                    </div> */}
                </div>
            </div>

            <Bills />
            <AddBill />
        </div>
    );
};

export default BillTable;