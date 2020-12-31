import http from './index'

export const createUser = async (createdUser) => {
    const {
      data: { user },
    } = await http.post("/users/signup", { user: createdUser });
    return user;
  };