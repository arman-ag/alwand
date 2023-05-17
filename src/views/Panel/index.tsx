import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card';
import { Input } from '../../components/common/Input';
import { gryItemAction } from '../../redux/actions';

const Panel = () => {
  const { data } = useSelector((state) => state.cards);
  const [newTitle, setNewTitle] = useState('');
  const [choseCard, setChoseCard] = useState();
  const [listCards, setListCards] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setListCards(data);
  }, [data]);

  useEffect(() => {
    dispatch(gryItemAction.getItem());
  }, []);
  const deleteAction = () => {
    const remainingCards = listCards.filter((item) => {
      return item.id !== choseCard;
    });
    setListCards(remainingCards);
  };
  const editTitle = () => {
    const newList = listCards?.map((item) => {
      if (item.id === choseCard) {
        return { ...item, title: newTitle };
      }
      return item;
    });
    setListCards(newList);
    setNewTitle('');
  };

  return (
    <>
      <div
        onClick={() => setChoseCard(null)}
        className='flex gap-4 flex-wrap justify-center py-16	'
      >
        {listCards?.map((item) => {
          return (
            <Card
              choseCard={choseCard}
              setChoseCard={setChoseCard}
              cardDetail={item}
              key={item.id}
            />
          );
        })}
      </div>
      <div className='flex justify-end bg-[#F8F8FB]'>
        <form className='flex' onSubmit={(e) => e.preventDefault()}>
          <Input
            entry={newTitle}
            setEntry={setNewTitle}
            title='edit film title'
          />
          <button type='submit' onClick={editTitle}>
            Edit
          </button>
        </form>
        <button onClick={deleteAction} className='mx-5'>
          Delete
        </button>
      </div>
    </>
  );
};

export default Panel;
