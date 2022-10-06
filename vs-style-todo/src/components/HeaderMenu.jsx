import React from "react";

function HeaderMenu() {
  return (
    <div className="bg-slate-900">
      <div className="px-3 py-2 flex flex-row gap-5 text-gray-300">
        <div className=" font-medium text-sm  tracking-tighter">
          <p>File</p>
        </div>
        <div className=" font-medium text-sm  tracking-tighter">
          <p>Edit</p>
        </div>
        <div className=" font-medium text-sm  tracking-tighter">
          <p>Selection</p>
        </div>
        <div className=" font-medium text-sm  tracking-tighter">
          <p>View</p>
        </div>
        <div className=" font-medium text-sm  tracking-tighter">
          <p>Go</p>
        </div>
        <div className=" font-medium text-sm  tracking-tighter">
          <p>Run</p>
        </div>
        <div className=" font-medium text-sm  tracking-tighter">
          <p>Terminal</p>
        </div>
        <div className=" font-medium text-sm  tracking-tighter">
          <p>Help</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderMenu;
