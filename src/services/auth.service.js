import axios from "axios";

export const userSignUpService = (firstName, lastName, email, password) => {
  return axios.post("api/auth/signup", {
    firstName: firstName,
    lastName: lastName,
    username: email,
    password: password,
  });
};

export const userLoginService = (email, password) => {
  console.log(email, password);
  const retur = axios.post("api/auth/login", {
    username: email,
    password: password,
  });
  console.log(
    "🚀 ~ file: auth.service.js ~ line 18 ~ userLoginService ~ retur",
    retur
  );
  return retur;
};
