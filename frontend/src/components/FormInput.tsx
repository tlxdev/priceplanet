const FormInput = ({ label, required, register }: { label: string; required: boolean; register: any }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input type="text" className="w-64 input input-bordered" {...register} />
    </div>
  );
};

export default FormInput;
