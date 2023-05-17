import { checkboxProps } from './type';

const Checkbox = ({ title }: checkboxProps) => {
  return (
    <div>
      <input name={title} type='checkbox' />
      <label>{title}</label>
    </div>
  );
};

export default Checkbox;
