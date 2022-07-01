import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://myapp-cf6af-default-rtdb.europe-west1.firebasedatabase.app",
});

export default apiClient;