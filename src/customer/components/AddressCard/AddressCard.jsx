import React from 'react';

const AddressCard = () => {
  return (
    <div >
      <h2 className='text-lg sm:text-xl md:text-2xl font-bold text-center mb-4 mt-1 py-5 sm:py-7'>
        Delivery Address
      </h2>

      <div className='space-y-4'>
        <div>
          <p className='font-semibold text-gray-700'>Name:</p>
          <p className='text-gray-900'>Taarak Mehta</p>
        </div>
        <div>
          <p className='font-semibold text-gray-700'>Address:</p>
          <p className='text-gray-900'>Mumbai, Gokuldham Society, Building No. 12, Flat No. 304, 40001</p>
        </div>
        <div>
          <p className='font-semibold text-gray-700'>Phone:</p>
          <p className='text-gray-900'>+91 91223 4534</p>
        </div>
      </div>
    </div>
  );
}

export default AddressCard;
