import { Toaster, toast } from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import FormSection from "./form-section";
import FormLabel from "./form-label";
import { useEffect } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { FormValues } from "../../lib/api/application";
import { Degree } from "../../lib/types";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    alert(JSON.stringify(data, null, 2));
    // const status = await ApplicationAPI.sendApplication({
    //   email: data.email,
    //   name: data.name,
    //   degree_year: data.degree_year,
    //   degree: data.degree,
    //   message: data.message,
    // });

    // if (status == 200) {
    //   toast.success("Søknaden er sendt!");
    // } else {
    //   toast.error("Noe gikk galt!");
    // }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        email: "",
        degree_year: 1,
        degree: Degree.DTEK,
        message: "",
      });
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

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <FormSection>
          <FormLabel isRequired>E-post</FormLabel>
          <input
            {...register("email", {
              required: "Du må legge til en epost-addresse!",
            })}
            className="p-2 rounded border text-black"
            type="email"
            name="email"
          />
          <ErrorMessage
            errors={errors}
            name="email"
            as={<p className="text-[#F6404F] italic" />}
          />
        </FormSection>

        <FormSection>
          <FormLabel isRequired>Navn</FormLabel>
          <input
            {...register("name", {
              required: "Du må legge til navnet ditt!",
            })}
            className="p-2 rounded border text-black"
            type="name"
            name="name"
          />
          <ErrorMessage
            errors={errors}
            name="name"
            as={<p className="text-[#F6404F] italic" />}
          />
        </FormSection>

        <FormSection>
          <FormLabel isRequired>Årstrinn</FormLabel>
          <select
            {...register("degree_year", {
              required: "Du må legge til hvilket trinn du går i!",
            })}
            className="p-2 rounded border text-black"
            name="degree_year"
          >
            <option value={1}>1. året</option>
            <option value={2}>2. året</option>
            <option value={3}>3. året</option>
            <option value={4}>4. året</option>
            <option value={5}>5. året</option>
            <option value={0}>Annet</option>
          </select>
          <ErrorMessage
            errors={errors}
            name="degree_year"
            as={<p className="text-[#F6404F] italic" />}
          />
        </FormSection>

        <FormSection>
          <FormLabel isRequired>Studieretning</FormLabel>
          <select
            {...register("degree", {
              required: "Du må legge til din studieretning!",
            })}
            className="p-2 rounded border text-black"
            name="degree"
          >
            <option value={Degree.DTEK}>Datateknologi</option>
            <option value={Degree.DSIK}>Datasikkerhet</option>
            <option value={Degree.DVIT}>Data Science/Datavitenskap</option>
            <option value={Degree.BINF}>Bioinformatikk</option>
            <option value={Degree.IMO}>Informatikk-matematikk-økonomi</option>
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
            name="degree"
            as={<p className="text-[#F6404F] italic" />}
          />
        </FormSection>

        <FormSection>
          <FormLabel isRequired>Hvorfor ønsker du å bli med?</FormLabel>
          <textarea
            {...register("message", {
              required: "Du må fortelle oss hvorfor du ønsker å bli med!",
            })}
            className="p-2 rounded border text-black"
            name="message"
            rows={5}
          />
          <ErrorMessage
            errors={errors}
            name="message"
            as={<p className="text-[#F6404F] italic" />}
          />
        </FormSection>

        <button
          className={
            "bg-blue-500 font-bold rounded px-3 py-2 m-auto transition-colors hover:bg-blue-400"
          }
          type="submit"
        >
          Send inn
        </button>
      </form>
    </>
  );
};

export default Form;
