import { BsPerson } from 'react-icons/bs';
import { inputProps } from './type';

export const Input = ({ title, setEntry }: inputProps) => {
  return (
    <div className='inline-block'>
      <label>{title}</label>
      <div className='bg-white flex'>
        <BsPerson />
        <input onChange={(e) => setEntry(e.target.value)} />
      </div>
    </div>
  );
};
