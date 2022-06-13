import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../reducers/authSlice";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, status } = useSelector((store) => store.auth);
  const [userDetail, setUserDetail] = useState({
    email: "",
    password: "",
  });
  const testUser = {
    email: "aaliyahsedmon",
    password: "aaliyahsedmon123",
  };
  const setUserDetailHandler = (e) => {
    const { name, value } = e.target;
    setUserDetail({ ...userDetail, [name]: value });
  };
  const testCredentials = (e) => {
    e.preventDefault();
    setUserDetail(testUser);
  };
  const submitUserDetail = async (e) => {
    e.preventDefault();
    console.log(userDetail);
    dispatch(userLogin(userDetail));
  };

  useEffect(() => {
    token && navigate("/");
    return () => {
      console.log("");
    };
  }, [token]);

  return (
    <div class='flex justify-center mx-auto'>
      <div class='bg-white shadow-md border sm:w-96 wp-80 border-gray-200 rounded-lg max-w-sm mt-6 p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <form class='space-y-6' action='' method='post'>
          <h3 class='text-xl font-medium text-gray-900 dark:text-white'>
            Login to Realm
          </h3>
          <div>
            <label
              for='email'
              class='text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300'>
              Your email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              value={userDetail.email}
              onChange={setUserDetailHandler}
              class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
              placeholder='name@gmail.com'
              required=''
            />
          </div>
          <div>
            <label
              for='password'
              class='text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300'>
              Your password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              value={userDetail.password}
              onChange={setUserDetailHandler}
              placeholder='••••••••'
              class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
              required=''
            />
          </div>
          {status === "rejected" ? (
            <h1 className='text-red-500'>Wrong crediential</h1>
          ) : (
            ""
          )}

          <button
            type='submit'
            onClick={testCredentials}
            class='w-full text-white bg-teal-300   hover:bg-teal-500 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 mb-0'>
            Add Test Credentials
          </button>
          <button
            type='submit'
            onClick={submitUserDetail}
            class='w-full text-white bg-teal-700 bg-lg  hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 '>
            Login to your account
          </button>
          {/* <div class='text-sm font-medium text-gray-500 dark:text-gray-300'>
            Not registered?
            <a
              href='#'
              class='text-teal-700 hover:underline dark:text-blue-500'>
              Create account
            </a>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
