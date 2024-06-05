import React from 'react';

const PushNotification = ({ formData, changeHandler }) => {
  return (
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
  );
};

export default PushNotification;
