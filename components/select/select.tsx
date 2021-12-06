import { FunctionComponent,useRef } from "react";

interface Select {
    options: string[];
}

const Select:FunctionComponent<Select> = ({ options }) => {
    const selectRef = useRef<HTMLSelectElement>(null);
    return (
      <div
        onClick={() => selectRef.current.focus()}
        className="rounded-full bg-white border border-border-primary relative px-4 mt-2 flex items-center justify-between"
      >
        <div className="transform pointer-events-none rotate-180 order-2 text-primary">
          ▲
        </div>
        <select ref={selectRef} name="" id="" className=" bg-white py-1 w-full text-base">
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  };

  export default Select;