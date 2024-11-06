"use client";
import { usePostTodosMutation } from "@/redux/api/todo";
import scss from "./AddTodo.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

interface iTodo {
  title: string;
  data: number;
  password: number;
  
}
const AddTodo = () => {
  const det = new Date()
  console.log(det);
  
  const [postTodosMutation] = usePostTodosMutation();
  const [state, setState] = useState("");
  const { register, handleSubmit } = useForm<iTodo>();
  const addTodo: SubmitHandler<iTodo> = async (data) => {
    const newProduct = {
      title: data.title,
      data: data.data,
      password: data.password,
      det: det
    };
    await postTodosMutation(newProduct);
    setState("");
  };
  return (
    <div className={scss.addtodo}>
      <div className="container">
        <div className={scss.content}>
          <form onSubmit={handleSubmit(addTodo)}>
            <input
              type="text"
              placeholder="Add Todo..."
                // value={state}
                // onChange={(e) => setState(e.target.value)}
              {...register("title", { required: true })}
            />
            <input
              type="number"
              placeholder="Data..."
              {...register("data", { required: true })}
            />
            <button>add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
