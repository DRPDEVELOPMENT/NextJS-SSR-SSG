import apiClient from "../../services/apiClient";

export const fetchRepo = async (repoId: string | number) =>
  await apiClient
    .get(`repositories/${repoId}`)
    .then((result) => result.data)
    .catch((ex) => console.log(ex));
