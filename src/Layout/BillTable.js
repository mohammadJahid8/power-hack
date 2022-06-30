import React from 'react';
import Bills from './Bills';

const BillTable = () => {
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
                        <h2 className='btn btn-ghost normal-case text-lg'>Add New Item</h2>
                    </div>
                </div>
            </div>

            <Bills />
        </div>
    );
};

export default BillTable;