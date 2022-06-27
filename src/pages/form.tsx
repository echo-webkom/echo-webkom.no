import { Formik, Form, Field, ErrorMessage } from "formik";
import Header from "../components/header/header";
import Section from "../components/section";

const FormPage = () => {
  return (
    <>
      <Header />
      <Section>
        <div className="max-w-9xl my-5">
          <h1 className="font-fira-bold text-4xl text-center mb-5">
            Send inn søknad
          </h1>
          <Formik
            initialValues={{
              email: "",
              name: "",
              year: "",
              program: "",
              message: "",
              date: new Date(),
            }}
            validate={(values) => {
              let errors: Map<string, string> = {};
              if (!values.email) {
                errors["email"] = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));

                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col max-w-xl m-auto gap-5">
                <label className="text-lg font-fira-bold">E-post</label>
                <Field
                  className="bg-black p-2 rounded border border-white"
                  type="email"
                  name="email"
                />

                <label className="text-lg font-fira-bold">Navn</label>
                <Field
                  className="bg-black p-2 rounded border border-white"
                  type="name"
                  name="name"
                />

                <label className="text-lg font-fira-bold">Årstrinn</label>
                <Field
                  className="bg-black text-white p-2 border border-white rounded"
                  as="select"
                  name="year"
                >
                  <option value="" disabled selected>
                    -- Velg her --
                  </option>
                  <option value="1">1. året</option>
                  <option value="2">2. året</option>
                  <option value="3">3. året</option>
                  <option value="4">4. året</option>
                  <option value="5">5. året</option>
                  <option value="other">Annet</option>
                </Field>

                <label className="text-lg font-fira-bold">Studieretning</label>
                <Field
                  className="bg-black text-white p-2 border border-white rounded"
                  as="select"
                  name="program"
                >
                  <option value="" disabled selected>
                    -- Velg her --
                  </option>
                  <option value="datateknologi">Datateknologi</option>
                  <option value="datasikkerhet">Datasikkerhet</option>
                  <option value="datavitenskap">
                    Data Science/Datavitenskap
                  </option>
                  <option value="bioinformatikk">Bioinformatikk</option>
                  <option value="imø">Informatikk-matematikk-økonomi</option>
                  <option value="master i inf">Master i informatikk</option>
                  <option value="programvareutvikling">
                    Felles master i programvareutvikling
                  </option>
                  <option value="års i inf">Årsstudium i informatikk</option>
                  <option value="postbach">Postbachelor</option>
                  <option value="annet">Annet studieløp</option>
                </Field>

                <label className="text-lg font-fira-bold">
                  Hvorfor ønsker du å bli med?
                </label>
                <Field
                  className="text-white bg-black border border-white p-2 rounded"
                  as="textarea"
                  rows="5"
                  name="message"
                />

                <button
                  className="w-fit font-fira mb-10 text-black bg-white border border-white rounded px-3 py-2 m-auto transition-all hover:bg-black hover:text-white"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Send inn
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </Section>
    </>
  );
};

export default FormPage;
