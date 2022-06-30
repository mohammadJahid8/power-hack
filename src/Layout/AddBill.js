import React from 'react';

const AddBill = () => {
    return (
        <div>
            <input type="checkbox" id="add-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="add-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary">Please Add a new Bill</h3>

                    <form className='grid grid-cols-1 gap-3 justify-items-center mt-5' >
                        <input type="text" name='name' placeholder='Full Name' className="input input-bordered w-full max-w-lg" />

                        <input type="email" name="email" placeholder='Email' className="input input-bordered w-full max-w-lg" />
                        <input type="number" name="phone" placeholder='Phone' className="input input-bordered w-full max-w-lg" />
                        <input type="number" name="paidAmount" placeholder="Paid Amount" className="input input-bordered w-full max-w-lg" />
                        <input type="submit" value="Submit" className="btn btn-primary w-full max-w-lg" />
                    </form>

                </div>
            </div>
        </div >
    );
};

export default AddBill;