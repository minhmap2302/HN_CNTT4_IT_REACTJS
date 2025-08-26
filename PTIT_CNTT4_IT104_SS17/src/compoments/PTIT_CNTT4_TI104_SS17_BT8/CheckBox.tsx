import { useState } from "react";

const Checkbox = () => {
  const options = ["Đi chơi", "Code", "Bơi lội", "Nhảy dây"];
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (value: string) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <div>
      <h3>Sở thích: {JSON.stringify(selected)}</h3>
      {options.map((option) => (
        <div key={option}>
          <label>
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => handleChange(option)}
            />
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
