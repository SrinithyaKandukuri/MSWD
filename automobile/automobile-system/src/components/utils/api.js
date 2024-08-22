import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9000/",
});

export const loginWithEmail = async ({ email, password }) => {
  try {
    const response = await api.post("/user/login", { email, password });
    localStorage.setItem("userId", response.data.data._id);
    localStorage.setItem(
      "name",
      response.data.data.name.firstName + " " + response.data.data.name.lastName
    );
    localStorage.setItem("email", response.data.data.email);
    localStorage.setItem("role", response.data.data.role);
    return response.data;
  } catch (error) {
    console.log(error.response);
    return { error: error.response.data, status: error.response.status };
  }
};

export const createUser = async ({ name, email, password }) => {
  try {
    const response = await api.post("/user/create", {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return { error: error.response.data, status: error.response.status };
  }
};

export const fetchCars = async () => {
  try {
    const response = await api.get("/car", {
      params: {
        user_id: localStorage.getItem("userId"),
      },
    });
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCarById = async (id) => {
  console.log(id);
  try {
    const response = await api.get(`/car/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createCar = async (car) => {
  try {
    const response = await api.post("/car", {
      ...car,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return { error: error.response.data, status: error.response.status };
  }
};

export const deleteCar = async (car_id) => {
  try {
    const response = await api.delete(`/car/${car_id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateCar = async (car) => {
  try {
    const response = await api.put(`/car/${car._id}`, {
      ...car,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const setFavorite = async ({ car_id }) => {
  try {
    const response = await api.post("/fav", {
      car_id,
      user_id: localStorage.getItem("userId"),
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default api;
