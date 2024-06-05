import React from 'react';

const EmailPreference = ({ formData, changeHandler }) => {
  return (
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
  );
};

export default EmailPreference;
