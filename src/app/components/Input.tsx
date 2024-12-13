export const Input = ({
  label,
  containerClass,
  rows,
  useTextarea = false,
}: {
  label: string;
  containerClass?: string;
  useTextarea?: boolean;
  rows?: number;
}) => {
  const classes = "text-black p-2";

  return (
    <div className={`flex flex-col ${containerClass ? containerClass : ""}`}>
      <label className="mb-2">{label}</label>
      {useTextarea ? (
        <textarea rows={rows ?? 3} className={classes} />
      ) : (
        <input className={classes} />
      )}
    </div>
  );
};
