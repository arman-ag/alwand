import { BiLock } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { inputProps } from './type';

export const Input = ({
  placeholder,
  entry,
  title,
  type,
  onChange,
}: inputProps) => {
  return (
    <div className='inline-block mt-2 '>
      <label>{title}</label>
      <div className='bg-white flex mt-1 rounded-md items-center h-11 px-4 shadow-md '>
        {type === 'password' ? (
          <BiLock className='text-2xl ml-2' />
        ) : (
          <BsPerson className='text-2xl ml-2' />
        )}
        <input
          onChange={onChange}
          placeholder={placeholder}
          id={type}
          name={type}
          value={entry}
          className='outline-none w-full'
        />
      </div>
    </div>
  );
};
