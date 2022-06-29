interface Props {
  error: string;
  children: React.ReactNode;
}

const FormError = ({ error, children }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {children}
      <div className="text-red-500 text-sm">{error}</div>
    </div>
  );
};

export default FormError;
