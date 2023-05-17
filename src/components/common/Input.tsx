import { BiLock } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { inputProps } from './type';

export const Input = ({ entry, title, setEntry, type }: inputProps) => {
  return (
    <div className='inline-block 	'>
      <label>{title}</label>
      <div className='bg-white flex mt-2 rounded-md items-center h-11 px-4 shadow-md '>
        {type === 'password' ? (
          <BiLock className='text-2xl ml-2' />
        ) : (
          <BsPerson className='text-2xl ml-2' />
        )}
        <input
          value={entry}
          className='outline-none w-full'
          onChange={(e) => setEntry(e.target.value)}
        />
      </div>
    </div>
  );
};
