import http from './index'

export const createUser = async (createdUser) => {
  console.log("http")
  const {
    data: { user },
  } = await http.post("/users/signup", { user: createdUser });
  return user;
};

export const login = async (loginUser) => {
  const {
    data: { user },
  } = await http.post("/users/login", { user: loginUser });
  return user;
};