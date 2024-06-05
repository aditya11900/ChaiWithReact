import React from 'react';


const PersonalInfo = ({ formData, changeHandler }) => {
  return (
    <div className="mb-4">
      <div className="mb-4">
        <label htmlFor="firstName" className="block font-bold mb-2">First name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="FirstName"
          value={formData.firstName}
          onChange={changeHandler}
          className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block font-bold mb-2">Last name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="LastName"
          value={formData.lastName}
          onChange={changeHandler}
          className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-bold mb-2">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="love@abcd.com"
          value={formData.email}
          onChange={changeHandler}
          className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
