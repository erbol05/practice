import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getTodos: build.query<TODO.GetTodosResponse, TODO.GetTodosRequest>({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
    postTodos: build.mutation<TODO.PostTodosResponse, TODO.PostTodosRequest>({
      query: (data) => ({
        url: "",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    deleteTodos: build.mutation<TODO.deleteTodosResponse, TODO.deleteTodosRequest>({
      query: (_id) => ({
        url: `/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
    PatchTodos: build.mutation<TODO.patchTodosResponse, TODO.patchTodosRequest>({
      query: ({ _id, newDate }) => ({
        url: `/${_id}`,
        method: "PATCH",
        body: newDate,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  usePostTodosMutation,
  useDeleteTodosMutation,
  usePatchTodosMutation,
} = api;
