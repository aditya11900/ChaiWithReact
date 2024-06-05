import React from 'react';

const AddressInfo = ({ formData, changeHandler }) => {
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="country" className="block font-bold mb-2">Country</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="streetAddress" className="block font-bold mb-2">Street Address</label>
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="B-25C"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="block font-bold mb-2">City</label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="City"
          value={formData.city}
          onChange={changeHandler}
          className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="state" className="block font-bold mb-2">State / Province</label>
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Bihar"
          value={formData.state}
          onChange={changeHandler}
          className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="postalCode" className="block font-bold mb-2">Postal Code</label>
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="110077"
          value={formData.postalCode}
          onChange={changeHandler}
          className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
        />
      </div>
    </div>
  );
};

export default AddressInfo;
