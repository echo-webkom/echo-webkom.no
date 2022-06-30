interface Props {
  children: React.ReactNode;
}

const FormSection = ({ children }: Props) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

export default FormSection;
