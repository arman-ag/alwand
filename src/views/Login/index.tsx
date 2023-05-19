import { useFormik } from 'formik';
import { FaGoogle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import loginLogo from '../../assets/login.png';
import loginLogo2 from '../../assets/login2.svg';
import Checkbox from '../../components/common/Checkbox';
import { Input } from '../../components/common/Input';
import { authenticationAction } from '../../redux/actions';
function Login() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      dispatch(
        authenticationAction.authenticateSend({
          email: values.email,
          password: values.password,
        })
      );
    },
  });

  return (
    <>
      <div dir='rtl' className='flex h-full'>
        <div className='w-3/5 relative'>
          <div className='absolute left-20 top-1/3 w-4/12 text-xl font-bold	  '>
            لورم ایپسوم یا طرح‌ نما به متنی بی‌معنی در صنعت چاپ، صفحه‌آرایی و
            طراحی گرافیک گفته می‌شود
          </div>
          <img className='absolute w-7/12 bottom-0  right-0' src={loginLogo2} />
        </div>
        <div className='bg-[#F8F8FB] flex flex-col w-2/5 justify-center p-32 rtl'>
          <div className='flex items-center mb-6'>
            <img src={loginLogo} />
            <div className='mr-7 '>
              <p className='font-bold text-lg'>ورود به حساب کاربری</p>
              <p>شرکت توشعه و پخش مک دونالد</p>
            </div>
          </div>
          <div>
            <form
              className=' flex flex-col  justify-between '
              onSubmit={formik.handleSubmit}
            >
              <Input
                onChange={formik.handleChange}
                placeholder=' ایمیل یا کد ملی خود را وارد کنید'
                type={'email'}
                title={'نام کاربری'}
                entry={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className='text-red-700 mt-1'>{formik.errors.email}</div>
              ) : null}
              <Input
                onChange={formik.handleChange}
                entry={formik.values.password}
                placeholder={'کلمه عبور خود را وارد کنید'}
                type={'password'}
                title={'کلمه عبور'}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className='text-red-700 mt-1'>
                  {formik.errors.password}
                </div>
              ) : null}
              <div />
              <Checkbox style='mt-5' title='مرا به خاطر داشته باش' />
              <button className='bg-blue-800 my-3 text-white font-bold py-2 px-4 border border-blue-700 rounded'>
                ورود
              </button>
              <div className='flex'>
                <p> کاربر جدید هستید ؟ </p>
                <a href='#' className='mr-3 text-blue-700'>
                  ثبت نام
                </a>
              </div>
            </form>
          </div>
          <div className='flex items-center my-6'>
            <div className='w-full h-0 border border-[#E9EBFF' />
            <span className='mx-2'>یا</span>
            <div className='w-full h-0 border border-[#E9EBFF' />
          </div>
          <button className='bg-[#E9EBFF]  font-bold py-2 px-4   rounded'>
            <div className='flex items-center justify-center'>
              <FaGoogle className='text-red-500 text-2xl ml-3' />
              <span>ورود از طریق حساب گوگل</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
