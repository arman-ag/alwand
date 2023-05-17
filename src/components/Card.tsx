import { AiFillStar } from 'react-icons/ai';
interface cardProps {
  choseCard: number;
}
const Card = ({ cardDetail, setChoseCard, choseCard }) => {
  return (
    <div
      className={`flex justify-center ${
        choseCard === cardDetail.id ? 'bg-blue-500' : 'bg-white'
      } flex-wrap cursor-pointer	active:bg-blue-500 focus:bg-blue-500 `}
      onClick={(e) => {
        setChoseCard(cardDetail.id);
        setClick(true);
        e.stopPropagation();
      }}
    >
      <div className='rounded-lg h-85 shadow-lg  w-56 sm:w-80  dark:bg-darkBlue-100 dark:text-white'>
        <img
          className='rounded-t-lg h-60  '
          src={cardDetail?.images[0]}
          alt={cardDetail?.alt}
        />

        <div className='p-6'>
          <div className='flex justify-between align-center'>
            <h5 className='text-gray-900 text-xl font-medium mb-2'>
              {cardDetail?.title}
            </h5>
            <div className='flex items-center'>
              <AiFillStar />
              <span>{cardDetail.imdb_rating}</span>
            </div>
          </div>
          <p>
            <span className='font-bold '>country:</span>
            <span>{cardDetail.country}</span>
          </p>{' '}
          <p>
            <span className='font-bold '>year:</span>
            <span>{cardDetail.year}</span>
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default Card;
