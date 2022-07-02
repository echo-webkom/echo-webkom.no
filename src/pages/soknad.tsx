import Header from "../components/header/header";
import Section from "../components/section";
import { Toaster, toast } from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import FormSection from "../components/form/form-section";
import FormLabel from "../components/form/form-label";
import { useEffect } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { FormValues } from "../lib/api/application";
import { Degree } from "../lib/types";

const FormPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    alert(JSON.stringify(data));
    toast.success("Søknaden er sendt!");

    // bizniz logic if failure
    // toast.error("Søknaden ble ikke sendt!");
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ name: "", email: "", grade: 0, program: undefined, message: "" });
    }
  }, [formState, isSubmitSuccessful, reset]);

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            background: "black",
            border: "1px solid white",
            color: "white",
          },
        }}
      />

      <Header />
      <Section>
        <div className="max-w-9xl my-5">
          <h1 className="font-fira-bold text-4xl text-center mb-5">
            Send inn søknad
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col max-w-xl m-auto gap-5"
          >
            <FormSection>
              <FormLabel isRequired>E-post</FormLabel>
              <input
                {...register("email", {
                  required: "Du må legge til en epost-addresse!",
                })}
                className="bg-black p-2 rounded border border-white"
                type="email"
                name="email"
              />
              <ErrorMessage
                errors={errors}
                name="email"
                as={<p className="text-red-600 italic" />}
              />
            </FormSection>

            <FormSection>
              <FormLabel isRequired>Navn</FormLabel>
              <input
                {...register("name", {
                  required: "Du må legge til navnet ditt!",
                })}
                className="bg-black p-2 rounded border border-white"
                type="name"
                name="name"
              />
              <ErrorMessage
                errors={errors}
                name="name"
                as={<p className="text-red-600 italic" />}
              />
            </FormSection>

            <FormSection>
              <FormLabel isRequired>Årstrinn</FormLabel>
              <select
                {...register("grade", {
                  required: "Du må legge til hvilket trinn du går i!",
                })}
                className="bg-black text-white p-2 border border-white rounded"
                name="grade"
              >
                <option value="" disabled selected>
                  -- Velg her --
                </option>
                <option value={1}>1. året</option>
                <option value={2}>2. året</option>
                <option value={3}>3. året</option>
                <option value={4}>4. året</option>
                <option value={5}>5. året</option>
                <option value={0}>Annet</option>
              </select>
              <ErrorMessage
                errors={errors}
                name="grade"
                as={<p className="text-red-600 italic" />}
              />
            </FormSection>

            <FormSection>
              <FormLabel isRequired>Studieretning</FormLabel>
              <select
                {...register("program", {
                  required: "Du må legge til din studieretning!",
                })}
                className="bg-black text-white p-2 border border-white rounded"
                name="program"
              >
                <option value={undefined} disabled selected>
                  -- Velg her --
                </option>
                <option value={Degree.DTEK}>Datateknologi</option>
                <option value={Degree.DSIK}>Datasikkerhet</option>
                <option value={Degree.DVIT}>Data Science/Datavitenskap</option>
                <option value={Degree.BINF}>Bioinformatikk</option>
                <option value={Degree.IMO}>
                  Informatikk-matematikk-økonomi
                </option>
                <option value={Degree.INF}>Master i informatikk</option>
                <option value={Degree.PROG}>
                  Felles master i programvareutvikling
                </option>
                <option value={Degree.ARMNINF}>Årsstudium i informatikk</option>
                <option value={Degree.POST}>Postbachelor</option>
                <option value={Degree.MISC}>Annet studieløp</option>
              </select>
              <ErrorMessage
                errors={errors}
                name="program"
                as={<p className="text-red-600 italic" />}
              />
            </FormSection>

            <FormSection>
              <FormLabel isRequired>Hvorfor ønsker du å bli med?</FormLabel>
              <textarea
                {...register("message", {
                  required: "Du må fortelle oss hvorfor du ønsker å bli med!",
                })}
                className="text-white bg-black border border-white p-2 rounded"
                name="message"
                rows={5}
              />
              <ErrorMessage
                errors={errors}
                name="message"
                as={<p className="text-red-600 italic" />}
              />
            </FormSection>

            <button
              className="w-fit font-fira mb-10 text-black bg-white border border-white rounded px-3 py-2 m-auto transition-all hover:bg-black hover:text-white"
              type="submit"
            >
              Send inn
            </button>
          </form>
        </div>
      </Section>
    </>
  );
};

export default FormPage;
