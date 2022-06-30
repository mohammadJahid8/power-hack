import React from 'react';
import { useQuery } from 'react-query';
import fetcher from './Axios.config';
import DeleteBill from './DeleteBill';

const Bills = () => {

    //data loaded from database by axios custom api using react query
    const { data, isLoading } = useQuery("tools", () =>
        fetcher.get("/billing-list")
    );

    const bills = data?.data;


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
                            bills?.map(bill =>
                                <tr>
                                    <th>{bill._id}</th>
                                    <td>{bill.name}</td>
                                    <td>{bill.email}</td>
                                    <td>{bill.phone}</td>
                                    <td>{bill.paidAmount}</td>
                                    <td>
                                        <label
                                            // onClick={() => setDeleteProduct(tool)}
                                            htmlFor="delete-bill-modal"
                                            className="btn btn-primary btn-xs mr-2"
                                        >
                                            Edit
                                        </label>
                                        <label
                                            // onClick={() => setDeleteProduct(tool)}
                                            htmlFor="delete-bill-modal"
                                            className="btn btn-error btn-xs "
                                        >
                                            Delete
                                        </label>
                                    </td>
                                </tr>
                            )}


                    </tbody>

                </table>
            </div>
            {/* {deleteProduct && ( */}
            <DeleteBill
            // deleteProduct={deleteProduct}
            // tools={tools?.data}
            // setDeleteProduct={setDeleteProduct}
            // refetch={refetch}
            />
            {/* )} */}

            <div>
                <div class="btn-group justify-center rounded-none">
                    <button class="btn btn-sm">1</button>
                    <button class="btn btn-sm btn-active">2</button>
                    <button class="btn btn-sm">3</button>
                    <button class="btn btn-sm">4</button>
                </div>
            </div>
        </div>
    );
};

export default Bills;