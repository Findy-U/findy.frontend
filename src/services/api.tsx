import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "https://findybackend-development.up.railway.app",
});

export const createUser = async (body: any) => {
  try {
    const response = await api.post("/api/candidate-users", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 201) {
      toast.success("Conta criada com sucesso!", {
        autoClose: 1700,
      });

      return {
        status: 201,
      };
    } else {
      toast.error("Erro desconhecido");
      return { success: false, message: "Erro desconhecido" };
    }
  } catch (error: any) {
    if (error.response.status === 409) {
      toast.error("Esse email já existe");
      return { sucess: false, status: 409, message: "Esse email já existe" };
    } else {
      toast.error("Erro desconhecido");
      return { success: false, message: "Erro desconhecido" };
    }
  }
};
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post("/api/login", { email, password });
    if (response.status === 200) {
      return {
        data: response,
        status: 200,
        success: true,
        message: "Conta criada com sucesso!",
      };
    } else {
      return { success: false, message: "Erro desconhecido" };
    }
  } catch (error: any) {
    console.log(error)
    if (error?.response.data.statusCode === 401) {
      toast.error(
        "O endereço de e-mail ou a senha fornecidos estão incorretos.",
        {
          style: {
            fontSize: "1.7rem ",
          },
        }
      );
    }
  }
};

export const formProject = async (body: any) => {
  try {
    return await api.post("/api/candidate-projects", body);
  } catch (error: any) {}
};

export const getProjects = async () => {
  return await api.get("/api/candidate-projects");
};
export const getPositions = async () => {
  return await api.get("/api/candidate-projects/roles");
};

export const getLanguages = async () => {
  return await api.get("/api/candidate-projects/skills");
};
export const getLanguagesById = async (id: string) => {
  return await api.get(`/api/candidate-projects/skills/${id}`);
};

export const getCandidatesUsers = async () => {
  return await api.get("/api/candidate-users");
};

export const getCandidateUser = async (id: string) => {
  return await api.get(`/api/candidate-users/${id}`);
};

/* export const getCandidatesProfiles = async () => {
  return await api.get("/api/candidate-profile");
}; */

export const updateProfile = async (body: any) => {
  try {
    return await api.post("/api/candidate-profile", body);
  } catch (error: any) {
    console.log(error);
  }
};

export default api;
