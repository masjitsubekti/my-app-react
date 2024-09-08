
import axiosInstance from "./axios.service";
import axios from "axios";

export const itemService = () => {
  const url = "http://localhost:3333/v1/master/item";
  const retrieve = (req) => {
    return axios.get(url, {
      params: req,
    });
  };

  const retrieveAll = (req) => {
    return axios.get(`${url}/all`, {
      params: req,
    });
  };

  const retrieveById = (id) => {
    return axios.get(`${url}/${id}`);
  };

  const save = (req) => {
    if (req.id) {
      return update(req);
    } else {
      return create(req);
    }
  };

  const create = (req) => {
    return axios.post(url, req, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    });
  };

  const update = (req) => {
    return axios.put(`${url}/${req.id}`, req);
  };

  const deleted = (id) => {
    return axios.delete(`${url}/${id}`);
  };

  return {retrieve, retrieveAll, retrieveById, save, create, update, deleted};
};
