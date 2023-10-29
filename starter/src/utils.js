import axios from "axios";

const customFetch = axios.create({
  baseUrl: "http://localhost:5000/api/tasks",
});

export default customFetch;
