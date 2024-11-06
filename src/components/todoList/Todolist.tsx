"use client";
import { FC } from "react";
import scss from "./Todolist.module.scss";
import { useDeleteTodosMutation, useGetTodosQuery } from "@/redux/api/todo";
console.log(process.env.NEXT_PUBLIC_API_URL);

const Todolist: FC = () => {
  const { data } = useGetTodosQuery();
  const [deleteTodosMutation] = useDeleteTodosMutation();

  return (
    <div className={scss.todolist}>
      <div className="container">
        <div className={scss.content}>
          <h1>Todolist</h1>
          {data?.map((el) => (
            <div key={el._id}>
              <h1>{el.title}</h1>
              <h2>{el.data}</h2>
              <h3>{el.password}</h3>
              <h4>{el.det}</h4>
              <button onClick={async () => await deleteTodosMutation(el._id!)}>
                delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todolist;
