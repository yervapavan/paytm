import React from 'react';

function InputBox({ label, placeholder, onChange, type }) {
  return (
    <div className='mb-2'>
      <div className='text-md block font-medium text-left'>{label}</div>
      <input
        onChange={onChange}
        className='text-black w-full border-slate-200 border-2 rounded p-1'
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

export default InputBox;
