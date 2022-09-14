import React from "react";
import "boxicons";

function Header() {
  return (
    <>
      <div className="my-2 mx-5 md:mx-0 shadow-2xl rounded-md ">
        <div className="mx-auto border bg-white rounded-md">
          <div className="flex items-center justify-between mx-auto max-w-6xl px-3">
            <div className="w-[100px] h-[60px]">
              <img
                src="https://shortapp.netlify.app/logo192.png"
                alt="logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="hidden sm:flex bg-gray-100 rounded-full max-w-2xl h-12 w-[330px] px-5  items-center justify-between">
              <input
                type="text"
                placeholder="Search accounts and videos"
                className="bg-transparent border-none w-full h-full rounded-full outline-none text-black placeholder:text-black"
              />
              <box-icon name="search"></box-icon>
            </div>

            <div className="flex items-center justify-between gap-5">
              <box-icon name="bell" className="icon"></box-icon>
              <img
                src="https://avatars.githubusercontent.com/u/79178437?s=400&u=cff256e8ef77217e73d6645b4d4e4ce32f3f114b&v=4"
                alt="user-img"
                className="rounded-full w-10 h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
