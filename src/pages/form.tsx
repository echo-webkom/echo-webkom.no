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
            initialValues={{ email: "", password: "" }}
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

                <label className="text-lg font-fira-bold">Studieretning</label>
                <Field
                  className="bg-black text-white p-2 border border-white rounded"
                  as="select"
                  name="color"
                >
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
                  className="text-white bg-black border border-white p-2"
                  as="textarea"
                  name="message"
                />

                <button
                  className="w-fit font-fira text-black bg-white rounded px-3 py-2 m-auto"
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
