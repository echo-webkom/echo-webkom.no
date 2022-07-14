interface Props {
  children: string;
  isRequired?: boolean;
}

const FormLabel = ({ children, isRequired }: Props) => (
  <label
    className="text-lg text-black font-fira-bold"
    aria-required={isRequired}
  >
    {children}
    {isRequired && <span className="ml-1 text-[#F6404F]">*</span>}
  </label>
);

export default FormLabel;
