import React, { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/PresonalInfo";
import AddressInfo from "./components/AdderssInfo";
import EmailPreference from "./components/EmailPreference";
import PushNotification from "./components/PushNotification";



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
        <PersonalInfo formData={formData} changeHandler={changeHandler} />
        <AddressInfo formData={formData} changeHandler={changeHandler} />
        <EmailPreference formData={formData} changeHandler={changeHandler} />
        <PushNotification formData={formData} changeHandler={changeHandler} />
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
