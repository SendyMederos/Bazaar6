import http from './index'

export const createUser = async (createdUser) => {
    const {
      data: { user },
    } = await http.post("/api/users", { user: createdUser });
    return user;
  };