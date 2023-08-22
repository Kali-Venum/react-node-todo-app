import React, { useState, useEffect } from "react";

import data from "../data.json";
import Todo from "./Todo";

const TodoList = () => {
  const [newData, setNewData] = useState([]);

  const dataHandler = () => {
    setNewData(() => data.data);
  };

  useEffect(() => {
    dataHandler();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b bg-gray-600 font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4 text-white">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-4 text-white">
                    Todo
                  </th>
                  <th scope="col" className="px-6 py-4 text-white">
                    Actions
                  </th>
                  {/*
                  <th scope="col" className="px-6 py-4">
                    Handle
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {/* {newData ??
                  newData.map((data) => (
                    <Todo data={data} />
                  ))} */}

                {data.data.map((data, index) => (
                  <Todo data={data} index={index} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
