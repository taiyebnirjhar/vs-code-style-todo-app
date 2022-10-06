import React from "react";

function Main() {
  return (
    <div className="main ">
      <main className="h-full">
        <div
          id="top"
          className="flex flex-row justify-between border-t-2 border-black"
        >
          <div className="border-t-2 border-red-300 cell py-3 px-4 flex flex-row">
            <div>
              <p>
                <i className="fa-brands fa-html5 text-red-500"></i>
                <span className="text-gray-300"> todo.html</span>
              </p>
            </div>
            <div>
              <p className="font-thin ml-6 text-gray-300">
                <i className="fa-solid fa-xmark"></i>
              </p>
            </div>
          </div>
          <div className="flex flex-row py-3 px-6 gap-5 text-gray-300">
            <div>
              <p>
                <i className=" fa-solid fa-play"></i>
              </p>
            </div>
            <div>
              <p>
                <i className="text-gray-300 fa-solid fa-table-columns"></i>
              </p>
            </div>
            <div>
              <p>
                <i className="text-gray-300 fa-solid fa-ellipsis"></i>
              </p>
            </div>
          </div>
        </div>

        <div id="bottom" className="px-5 py-2 ">
          <div>
            <p>
              <i className="fa-brands fa-html5 text-red-500"></i>
              <span className=" text-gray-300 italic text-xs">
                {` todo.html >`}
                <span className="text-gray-300 font-normal"> todo</span>
              </span>
            </p>
          </div>
          <div className="font-medium text-xl">
            <ul className="pt-5">
              <span className=""> " what do you have planned "</span>
              <span className="hidden">
                " <input type="text" />"
              </span>

              <span className="text-red-300" id="inputClose">
                {`/>`}
              </span>
            </ul>
            <ul className=""></ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
