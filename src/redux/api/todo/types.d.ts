namespace TODO {
  interface iTodo {
    _id?: number;
    title: string;
    data: number;
    password: number;
    det: string;
  }
  type GetTodosResponse = {
    _id?: number;
    title: string;
    data: number;
    password: number;
    det: string;
  }[];
  type GetTodosRequest = void;
  type PostTodosResponse = {
    _id?: number;
    title: string;
  }[];
  type PostTodosRequest = {
    title: string;
    data: number;
    password: number;
  };
  type deleteTodosResponse = {
    _id?: number;
    title: string;
  }[];
  type deleteTodosRequest = number;

  type patchTodosResponse = {
    _id?: number;
    title: string;
  }[];
  type patchTodosRequest = {
    _id: number;
    newDate: {
      _id?: number;
      title: string;
      data: number;
      password: number;
      det: string;
    };
  };
}
