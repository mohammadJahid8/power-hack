import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import fetcher from './Axios.config';
import DeleteBill from './DeleteBill';
import Update from './Update';
import { toast } from "react-toastify";

const Bills = () => {
    const [deleteBill, setDeleteBill] = useState(null);
    const [bills, setBills] = useState([]);
    const [limit, setLimit] = useState(10);
    const [pageNumber, setPageNumber] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [id, setId] = useState(null);
    // console.log(totalPages);

    const [reload, setReload] = useState(false);

    useEffect(() => {
        (async () => {
            const { data } = await fetcher.get(`/billing-list?limit=${limit}&pageNumber=${pageNumber}`);
            setBills(data.bills);
            setTotalPages(Math.ceil(data?.totalBills / limit));
            setReload(!reload)
        })();
    }, [limit, pageNumber, reload]);

    const handleDeleteItem = (id) => {
        const res = fetcher.delete(`/delete-billing/${id}`);
        toast.success(`Bill has been deleted successfully`);
        setReload(!reload)

    }


    return (
        <div>
            <div class="overflow-x-auto rounded-none">
                <table class="table table-compact w-full ">
                    <thead className=''>
                        <tr>
                            <th>Billing ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Paid Amount</th>
                            <th>Action</th>
                            {/* <th>Favorite Color</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bills?.map(bill => <>
                                <tr>
                                    <th>{bill._id}</th>
                                    <td>{bill.name}</td>
                                    <td>{bill.email}</td>
                                    <td>{bill.phone}</td>
                                    <td>{bill.paidAmount}</td>
                                    <td>
                                        <label
                                            onClick={() => setId(bill._id)}
                                            htmlFor="update-modal"
                                            className="btn btn-primary btn-xs mr-2"
                                        >
                                            Edit
                                        </label>
                                        <label
                                            onClick={() => setDeleteBill(bill)}
                                            htmlFor="delete-bill-modal"
                                            className="btn btn-error btn-xs "
                                        >
                                            Delete
                                        </label>
                                    </td>

                                </tr>

                            </>
                            )}


                    </tbody>

                </table>
                <div className="flex justify-center my-4">
                    {
                        [...Array(totalPages).keys()].map(n => <div onClick={() => setPageNumber(n)} className={`mx-3 border border-black px-3 py-1 cursor-pointer hover:text-white hover:bg-black ${pageNumber === n ? "bg-black text-white" : " "}`}>
                            {n + 1}
                        </div>)
                    }
                </div>

            </div>
            {/* {deleteProduct && ( */}
            <DeleteBill
                // id={id}
                deleteBill={deleteBill}
                handleDeleteItem={handleDeleteItem}
                setDeleteBill={setDeleteBill}
            // refetch={refetch}
            />
            {/* )} */}


            <Update id={id} />
        </div>
    );
};

export default Bills;