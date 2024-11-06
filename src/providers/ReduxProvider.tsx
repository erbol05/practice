"use client";
import { FC, ReactNode } from "react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "@/redux/api";
interface iReduxToolkit {
  children: ReactNode;
}
const ReduxProvider: FC<iReduxToolkit> = ({ children }) => {
  return <ApiProvider api={api}>{children}</ApiProvider>;
};

export default ReduxProvider;
