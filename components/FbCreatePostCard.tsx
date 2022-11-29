import React from "react";

function FbCreatePostCard() {
  return (
    <div className="w-4/6 mx-auto">
      <div className="bg-white w-full h-32 rounded-md shadow-md">
        <div className="w-full h-16 flex items-center  justify-between px-5">
          <img
            className=" rounded-full w-10 h-10 mr-3"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <input
            type="text"
            className=" w-full rounded-full h-10 bg-gray-200 px-5"
            placeholder="What's In Your Mind?..."
          />
        </div>
        <div className="w-full h-16 flex justify-between px-3 md:px-10 lg:px-24 xl:px-5">
          <div className=" flex h-full items-center">
            <svg
              className="h-12 fill-current text-red-500 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              width={27}
              height={27}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b0b0b0"
              strokeWidth={2}
              strokeLinecap="square"
              strokeLinejoin="round"
            >
              <path d="M15.6 11.6L22 7v10l-6.4-4.5v-1zM4 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2z" />
            </svg>
            <span className="text-xs lg:text-md mx-2 font-semibold text-gray-500">
              {" "}
              Video{" "}
            </span>
          </div>
          <div className=" flex h-full items-center">
            <svg
              className="h-12  text-green-500 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              width={27}
              height={27}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b0b0b0"
              strokeWidth={2}
              strokeLinecap="square"
              strokeLinejoin="round"
            >
              <rect x={3} y={3} width={18} height={18} rx={2} />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M20.4 14.5L16 10 4 20" />
            </svg>
            <span className="text-xs lg:text-md mx-2 font-semibold text-gray-500">
              {" "}
              Image{" "}
            </span>
          </div>
          <div className="hidden xl:flex h-full items-center">
            <svg
              className="h-12  text-yellow-500 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              width={27}
              height={27}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b0b0b0"
              strokeWidth={2}
              strokeLinecap="square"
              strokeLinejoin="round"
            >
              <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
              <circle cx={12} cy={10} r={3} />
              <circle cx={12} cy={12} r={10} />
            </svg>
            <span className="text-xs lg:text-md mx-2 font-semibold text-gray-500">
              {" "}
              Tag a Person{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FbCreatePostCard;
