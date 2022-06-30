import React from 'react';

const Header = () => {
    return (
        <div className='bg-gray-200 px-10 mb-20'>
            <div class="navbar ">
                <div class="flex-1">
                    <a class="btn btn-ghost normal-case text-xl">Power Hack</a>
                </div>
                <div class="flex-none">
                    <h2 className='btn btn-ghost normal-case text-xl'>Paid Total: 0</h2>
                </div>
            </div>
        </div>
    );
};

export default Header;