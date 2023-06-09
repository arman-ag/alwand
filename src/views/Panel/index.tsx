import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { SlUser } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Card from '../../components/Card';
import { Input } from '../../components/common/Input';
import Loading from '../../components/common/Loading';
import { gryItemAction } from '../../redux/actions';
import { RootState } from '../../redux/reducer/type';

const Panel = () => {
  const [choseCard, setChoseCard] = useState<number | null>();
  const [listCards, setListCards] = useState([]);
  const [pagination, setPagination] = useState(1);
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.cards);
  const { email } = useSelector((state: RootState) => state.authentication);

  useEffect(() => {
    setListCards(cards);
  }, [cards]);

  useEffect(() => {
    dispatch(gryItemAction.getItem(pagination));
  }, [pagination]);
  //delete card action
  const deleteAction = () => {
    const remainingCards = listCards.filter((item) => {
      return item.id !== choseCard;
    });
    setListCards(remainingCards);
    setChoseCard(null);
  };
  //edit card title action
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
  //validation
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
  //logout action
  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <>
      {listCards.length === 0 ? (
        <Loading />
      ) : (
        <>
          <header className='flex sticky top-0 w-full items-center bg-[#F8F8FB]  p-4  shadow-md'>
            <SlUser className='mr-2 text-xl' />
            <span>{email}</span>
            <button
              onClick={logout}
              className='ml-3 bg-red-800  text-white font-bold py-1 px-2 border border-red-700 rounded'
            >
              Logout
            </button>
          </header>
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
          <div className='flex justify-center items-center'>
            <button
              className='  bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full'
              onClick={() => setPagination((pervious) => ++pervious)}
            >
              <MdArrowBackIosNew />
            </button>
            <span className='mx-5 font-bold text-2xl'>{pagination}</span>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full'
              onClick={() =>
                setPagination((pervious) => {
                  if (pervious > 1) {
                    return pervious - 1;
                  }
                  return 1;
                })
              }
            >
              <MdArrowForwardIos />
            </button>
          </div>
          <footer className='flex justify-end items-center bg-[#F8F8FB] px-2 shadow-md mt-4'>
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
                className='bg-blue-800 my-3 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-3'
              >
                Edit
              </button>
            </form>

            <button
              onClick={deleteAction}
              className=' ml-2 bg-red-800 my-3 text-white font-bold py-2 px-4 border border-red-700 rounded'
            >
              Delete
            </button>
          </footer>
        </>
      )}
    </>
  );
};

export default Panel;
