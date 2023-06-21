import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
  const { dispatch, budget, remaining, currency } = useContext(AppContext);

  const handleInput = (event) => {
    if (event.target.value < budget - remaining) {
      alert(`You cannot go below "Total Spending: ${budget - remaining}"`);
      event.target.value = budget - remaining;
    }
    if (event.target.value > 20000) {
      alert('The value cannot exceed 20000');
      event.target.value = 20000;
    }

    if (event.target.validity.valid) {
      dispatch({ type: 'SET_BUDGET', payload: event.target.value });
      return event.target.value;
    }
  };

  return (
    <div className="d-flex align-items-center flex-row alert alert-secondary">
      <span className="me-1 w-50">Budget: {currency}</span>
      <input
        required="required"
        type="number"
        id="budget"
        defaultValue={budget}
        step="10"
        className="form-control"
        onChange={handleInput}
      />
    </div>
  );
};
export default Budget;
