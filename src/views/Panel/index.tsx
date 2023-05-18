// @ts-nocheck
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Card from '../../components/Card';
import { Input } from '../../components/common/Input';
import { gryItemAction } from '../../redux/actions';
const Panel = () => {
  const { data } = useSelector((state) => state.cards);
  const [choseCard, setChoseCard] = useState<number | null>();
  const [listCards, setListCards] = useState([]);
  const [pagination, setPagination] = useState(1);
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
    setChoseCard(null);
  };
  const editTitle = (newTitle: string) => {
    const newList = listCards?.map((item) => {
      if (item?.id === choseCard) {
        return { ...item, title: newTitle };
      }
      return item;
    });
    setListCards(newList);
    setChoseCard(null);
  };

  const formik = useFormik({
    initialValues: {
      editTitle: '',
    },
    validationSchema: Yup.object().shape({
      editTitle: Yup.string().required('Required'),
    }),
    onSubmit: (value) => {
      editTitle(value.editTitle);
      value.editTitle = '';
    },
  });

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
              key={item?.id}
            />
          );
        })}
      </div>

      <div className='flex justify-end items-center bg-[#F8F8FB] py-2'>
        {formik.touched.editTitle && formik.errors.editTitle ? (
          <div className='text-red-700 mr-5'>{formik.errors.editTitle}</div>
        ) : null}
        <form className='flex ' onSubmit={formik.handleSubmit}>
          <Input
            placeholder='change title'
            onChange={formik.handleChange}
            entry={formik.values.editTitle}
            type={'editTitle'}
            title=''
          />
          <button
            type='submit'
            className='bg-blue-800 my-3 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-5'
          >
            Edit
          </button>
        </form>

        <button
          onClick={deleteAction}
          className=' mx-5 bg-red-800 my-3 text-white font-bold py-2 px-4 border border-red-700 rounded'
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Panel;
