import React, { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';

export default function Button() {
  const { dispatch } = useAppContext();
  const [isDropdownVisible, setDropdownVisibility] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisibility(!isDropdownVisible);
  };

  const handleGroupingChange = (value) => {
    dispatch({ type: 'SET_GROUPING', payload: value });
    setDropdownVisibility(false);
  };

  const handleSortingChange = (value) => {
    dispatch({ type: 'SET_SORTING', payload: value });
    setDropdownVisibility(false);
  };

  return (
    <div className="relative z-999">
      <div
        className="flex items-center gap-[0.7rem] rounded-md px-1 py-[0.4px] border-2 border-solid border-[#e6e7eb] cursor-pointer shadow-[0_0_8px_0_#0000001a] text-[#373737]"
        onClick={toggleDropdown}
      >
        <div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            className="icon"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.5 2h-1v5h1V2zm6.1 5H6.4L6 6.45v-1L6.4 5h3.2l.4.5v1l-.4.5zm-5 3H1.4L1 9.5v-1l.4-.5h3.2l.4.5v1l-.4.5zm3.9-8h-1v2h1V2zm-1 6h1v6h-1V8zm-4 3h-1v3h1v-3zm7.9 0h3.19l.4-.5v-.95l-.4-.5H11.4l-.4.5v.95l.4.5zm2.1-9h-1v6h1V2zm-1 10h1v2h-1v-2z"
            ></path>
          </svg>
        </div>
        Display
        <div className="flex items-center text-base">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
          </svg>
        </div>
      </div>
      <section
        className={`absolute ${
          isDropdownVisible ? 'flex' : 'hidden'
        } flex-col gap-2.5 top-[125%] left-0 rounded-lg overflow-hidden transition-max-height duration-300 ease-in-out bg-[#ffff] border border-solid border-[#e6e7eb] shadow-md`}
        style={{ padding: isDropdownVisible ? '1rem 1.5rem' : '' }}
      >
        <div className="flex items-center gap-20 justify-between text-base">
          <span class="text-[#8D8D8D]">Grouping</span>
          <select class="capitalize cursor-pointer text-base pr-[2rem] pl-2 py-[0.2rem] rounded-md border border-solid border-[#e6e7eb]"
          onChange={(e) => handleGroupingChange(e.target.value)}>
            <option value="status">status</option>
            <option value="user">user</option>
            <option value="priority">priority</option>
          </select>
        </div>
        <div className="flex items-center gap-20 justify-between text-base">
          <span class="text-[#8D8D8D]">Ordering</span>
          <select name="ordering" class="capitalize cursor-pointer text-base pr-[2rem] pl-2 py-[0.2rem] rounded-md border border-solid border-[#e6e7eb]" 
          onChange={(e) => handleSortingChange(e.target.value)}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </section>
    </div>
  );
}
