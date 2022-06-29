import axios from "axios";

interface FormValues {
  email: string;
  name: string;
  message: string;
}

interface FeedbackResponse {
  isSuccess: boolean;
  title: string;
  description: string;
}

const successResponse: FeedbackResponse = {
  isSuccess: true,
  title: "Din søknad er sendt",
  description:
    "Tusen takk for din søknad. Vi vil ta kontakt med deg når søknadsprossesen er over.",
};

const errorResponse: FeedbackResponse = {
  isSuccess: false,
  title: "Noe gikk galt",
  description: "Vi kunne ikke sende søknaden din. Prøv igjen senere.",
};

const BACKEND_URL = process.env.BACKEND_URL ?? "http://localhost:8080";

const ApplicationAPI = {
  sendApplication: async (values: FormValues): Promise<FeedbackResponse> => {
    try {
      await axios.post(`${BACKEND_URL}/webkom-application`, values, {
        headers: { "Content-Type": "application/json" },
        validateStatus: (statusCode: number) => statusCode == 200,
      });

      return successResponse;
    } catch {
      return errorResponse;
    }
  },
};

export { ApplicationAPI };
export type { FormValues, FeedbackResponse };
