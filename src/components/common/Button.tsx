import { useDispatch } from 'react-redux';

export const Button = ({ name, actions }: buttonProps) => {
  const dispatch = useDispatch();

  return (
    <div className='inline-block'>
      <button type='submit' onClick={actions} name={name}>
        {name}
      </button>
    </div>
  );
};
