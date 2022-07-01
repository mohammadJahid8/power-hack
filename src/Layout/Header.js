import React from 'react';
import { useQuery } from 'react-query';
import fetcher from './Axios.config';

const Header = () => {
    const { data, isLoading, refetch } = useQuery("bills", () =>
        fetcher.get(`/billing-list`)
    );
    const bill = data?.data?.bills;
    const sum = bill?.reduce((acc, curr) => acc + curr.paidAmount, 0);
    refetch();


    return (
        <div className='bg-gray-200 px-10 mb-20'>
            <div class="navbar ">
                <div class="flex-1">
                    <a class="btn btn-ghost normal-case text-xl">Power Hack</a>
                </div>
                <div class="flex-none">
                    <h2 className='btn btn-ghost normal-case text-xl'>Paid Total: {sum}</h2>
                </div>
            </div>
        </div>
    );
};

export default Header;