import React from "react";

const Todo = (props) => {
  return (
    <tr className="border-b dark:border-neutral-500">
      <td className="whitespace-nowrap px-6 py-4 font-medium">{props.index}</td>
      <td className="whitespace-nowrap px-6 py-4">{props.data.todo}</td>
    </tr>
  );
};

export default Todo;
