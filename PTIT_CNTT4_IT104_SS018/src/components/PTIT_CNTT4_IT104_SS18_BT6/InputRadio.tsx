import React, { useReducer } from "react";

const genderReducer = (state: string, action: { type: string; payload?: string }) => {
  switch (action.type) {
    case "SET_GENDER":
      return action.payload || state;
    default:
      return state;
  }
};

const InputRadio: React.FC = () => {
  const [gender, dispatch] = useReducer(genderReducer, "Nam");
  const options = ["Nam", "Nữ", "Khác"];

  return (
    <div>
      {options.map((option) => (
        <div key={option}>
          <label>
            <input
              type="radio"
              value={option}
              checked={gender === option}
              onChange={() =>
                dispatch({ type: "SET_GENDER", payload: option })
              }
            />
            {option}
          </label>
        </div>
      ))}

      <p>Selected gender: {gender}</p>
    </div>
  );
};

export default InputRadio;
