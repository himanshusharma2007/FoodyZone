import React from 'react'

function InputFeild({OnChange,InputData}) {
  return (
    <input
      className="inputFeild border border-gray-400 p-2 bg-gray-700 text-white w-[200px] h-[30px] lg:w-[285px] lg:h-[40px] lg:mr-32 "
      type="text"
      onChange={OnChange}
      value={InputData}
      placeholder="Search..."
    />
  );
}

export default InputFeild
