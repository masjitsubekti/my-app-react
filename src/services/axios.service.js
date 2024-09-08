import axios from 'axios';

const axiosInstance = () => {
  const defaultOptions = {
    // baseURL: 'http://localhost:8072',
    // method: 'get',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
//   instance.interceptors.request.use(function (config) {
//     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZWFsZXJJZCI6bnVsbCwiZXhwIjoxNzM4NzI1MjA0LCJndWRhbmdJZCI6bnVsbCwiaWF0IjoxNzI1NzY1MjA0LCJwZWdhd2FpSWQiOm51bGwsInJvbGVJZCI6IjM4OGNhYzEyLWNlZjQtMTFlZS1iNTZjLTY3NmZjNzQyMzkyZiIsInRyYW5zcG9ydGlySWQiOm51bGwsInVzZXJJZCI6IjYxZGE4ODNjLWNlZjQtMTFlZS1iNTZjLTY3NmZjNzQyMzkyZiJ9.4r5--DOIN3HqlKckSrFL2jvrN1PNaIAGzvg5zS3SFto";
//     config.headers.Authorization =  token ? `Bearer ${token}` : '';
//     return config;

//   });

    instance.interceptors.request.use(function (config) {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZWFsZXJJZCI6bnVsbCwiZXhwIjoxNzM4NzI1MjA0LCJndWRhbmdJZCI6bnVsbCwiaWF0IjoxNzI1NzY1MjA0LCJwZWdhd2FpSWQiOm51bGwsInJvbGVJZCI6IjM4OGNhYzEyLWNlZjQtMTFlZS1iNTZjLTY3NmZjNzQyMzkyZiIsInRyYW5zcG9ydGlySWQiOm51bGwsInVzZXJJZCI6IjYxZGE4ODNjLWNlZjQtMTFlZS1iNTZjLTY3NmZjNzQyMzkyZiJ9.4r5--DOIN3HqlKckSrFL2jvrN1PNaIAGzvg5zS3SFto";
    // if (token) {
        config.headers['Authorization'] = 'Bearer ' + token
    // }
    return config;
   }, function (error) {
       return Promise.reject(error);
   });

  return instance;
};

export default axiosInstance;