import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: ""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally printing the value of Form Data:");
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center mt-10 p-4 bg-gray-900 text-white min-h-screen">
      <form onSubmit={submitHandler} className="w-full max-w-lg bg-gray-800 p-8 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="firstName" className="block font-bold mb-2">First name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="firstName"
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
            placeholder="lastName"
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
            placeholder="abc@gmail.com"
            value={formData.email}
            onChange={changeHandler}
            className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
          />
        </div>
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
        <fieldset className="mb-4">
          <legend className="block font-bold mb-2">By Email</legend>
          <div className="flex items-center mb-2">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHandler}
              className="mr-2"
            />
            <label htmlFor="comments">Comments</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={formData.candidates}
              onChange={changeHandler}
              className="mr-2"
            />
            <label htmlFor="candidates">Candidates</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
              className="mr-2"
            />
            <label htmlFor="offers">Offers</label>
          </div>
        </fieldset>
        <fieldset className="mb-4">
          <legend className="block font-bold mb-2">Push Notifications</legend>
          <p className="mb-2">These are delivered via SMS to your mobile phone.</p>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="pushEverything"
              name="pushNotifications"
              value="Everything"
              onChange={changeHandler}
              className="mr-2"
            />
            <label htmlFor="pushEverything">Everything</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="pushEmail"
              name="pushNotifications"
              value="Same as email"
              onChange={changeHandler}
              className="mr-2"
            />
            <label htmlFor="pushEmail">Same as email</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="pushNothing"
              name="pushNotifications"
              value="No Push Notifications"
              onChange={changeHandler}
              className="mr-2"
            />
            <label htmlFor="pushNothing">No Push Notifications</label>
          </div>
        </fieldset>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold rounded py-2 px-4 hover:bg-blue-700"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
