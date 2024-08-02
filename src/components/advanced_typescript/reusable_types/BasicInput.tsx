import { BasicInputTypes } from '@/types/InputTypes';

const BasicInput = ({ label, placeholder }: BasicInputTypes) => {
  return (
    <div>
      <label htmlFor="">
        {label}
        <input
          type="text"
          placeholder={placeholder}
          className="p-2 border rounded"
        />
      </label>
    </div>
  );
};

export default BasicInput;
