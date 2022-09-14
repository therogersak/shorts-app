import React from "react";
import Sideitem from "./Sideitem";

function Sidebar() {
  return (
    <>
      <div className="w-[300px] hidden md:block">
        <div className="border  bg-white shadow-xl rounded-md">
          <Sideitem icon="home" name="For You" />
          <Sideitem icon="planet" name="Explore" />
          <Sideitem icon="video" name="Live" />
          <Sideitem icon="group" name="Following" />
        </div>
        <div className="border mt-5 bg-white shadow-xl  rounded-md">
          <Sideitem icon="cog" name="Setting" />
          <Sideitem icon="help-circle" name="Help" />
          <Sideitem icon="flag" name="Report" />
          <Sideitem icon="message-square-dots" name="Send Feedback" />
        </div>
        <div className="mt-3 pl-1">
          <span>© 2022 therogersak</span>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
