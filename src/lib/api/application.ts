import axios from "axios";
import { Degree } from "../types";

interface FormValues {
  email: string;
  name: string;
  degree_year: number;
  degree: Degree;
  message: string;
}

const BACKEND_URL = process.env.BACKEND_URL ?? "http://localhost:8080";

const ApplicationAPI = {
  sendApplication: async (values: FormValues): Promise<number> => {
    try {
      const resp = await axios.post(
        `${BACKEND_URL}/application/webkom`,
        values,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      return resp.status;
    } catch {
      return 500;
    }
  },
};

export { ApplicationAPI };
export type { FormValues };
