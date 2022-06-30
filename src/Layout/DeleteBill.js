import React, { useEffect, useState } from "react";
import fetcher from "./Axios.config";
import { toast } from "react-toastify";
// import fetcher from "../../../Shared/api/axios.config";

const DeleteBill = ({
    id,
    refetch,
    setDeleteBill,
    deleteBill,
    handleDeleteItem
}) => {
    // console.log(deleteBill?._id);
    // const { _id } = deleteBill;





    return (
        <div>
            <input
                type="checkbox"
                id="delete-bill-modal"
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">
                        Are you sure you want to cancel this order?
                    </h3>
                    <div className="modal-action">
                        <button
                            onClick={() => handleDeleteItem(deleteBill?._id)}

                        >
                            <label htmlFor="delete-bill-modal" className="btn bg-error btn-sm w-20">
                                Yes!
                            </label>
                        </button>

                        <label htmlFor="delete-bill-modal" className="btn btn-sm w-20">
                            No!!
                        </label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteBill;
