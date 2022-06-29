interface Props {
  children: string;
  isRequired?: boolean;
}

const FormLabel = ({ children, isRequired }: Props) => (
  <label className="text-lg font-fira-bold" aria-required={isRequired}>
    {children}
    {isRequired && <span className="ml-1 text-red-600">*</span>}
  </label>
);

export default FormLabel;
