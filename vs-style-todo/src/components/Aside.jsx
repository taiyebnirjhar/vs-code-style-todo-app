import React from "react";

function Aside() {
  return (
    <div>
      <aside className="text-slate-500 bg-slate-900 flex flex-col p-4 py-2 justify-between h-full ">
        <div className="flex flex-col gap-y-5 py-4">
          <div className="">
            <p>
              <i className="fa-regular fa-copy text-2xl"></i>
            </p>
          </div>
          <div>
            <p>
              <i className="fa-solid fa-magnifying-glass search text-2xl"></i>
            </p>
          </div>
          <div>
            <p>
              <i className="fa-solid fa-sliders text-2xl"></i>
            </p>
          </div>
          <div>
            <p>
              <i className="fa-solid fa-bug text-2xl"></i>
            </p>
          </div>
          <div>
            <p>
              <i className="fa-brands fa-octopus-deploy text-2xl"></i>
            </p>
          </div>
        </div>
        <div className="py-4 flex flex-col gap-y-5">
          <div>
            <p>
              <i className="fa-regular fa-circle-user text-2xl"></i>
            </p>
          </div>
          <div>
            <p>
              <i className="fa-solid fa-gear text-2xl"></i>
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Aside;
