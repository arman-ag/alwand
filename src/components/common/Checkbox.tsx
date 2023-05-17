import { checkboxProps } from './type';

const Checkbox = ({ title, style }: checkboxProps) => {
  return (
    <div className={`${style} flex items-center`}>
      <input className='ml-2 ' name={title} type='checkbox' />
      <label>{title}</label>
    </div>
  );
};

export default Checkbox;
