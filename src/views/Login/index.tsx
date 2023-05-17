import { useState } from 'react';
import { useDispatch } from 'react-redux';
import loginLogo from '../../assets/login.png';
import loginLogo2 from '../../assets/login2.svg';
import Checkbox from '../../components/common/Checkbox';
import { Input } from '../../components/common/Input';
import { authenticationAction } from '../../redux/actions';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
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
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Input type={'email'} setEntry={setEmail} title={'نام کاربری'} />
              <Input
                type={'password'}
                setEntry={setPassword}
                title={'کلمه عبور'}
              />
              <div />
              <Checkbox style='mt-5' title='مرا به خاطر داشته باش' />
              <button
                onClick={() => {
                  dispatch(
                    authenticationAction.authenticateSend({ email, password })
                  );
                }}
              >
                ورود
              </button>
              <div className='flex'>
                <p>کاربر جدید هستید </p>
                <a href='#'>ثبت نام</a>
              </div>
            </form>
          </div>
          <div className='flex items-center'>
            <div className='w-full h-0 border border-[#E9EBFF' />
            <span className='mx-2'>یا</span>
            <div className='w-full h-0 border border-[#E9EBFF' />
          </div>
          <button>ورود از طریق حساب گوگل</button>
        </div>
      </div>
    </>
  );
}

export default Login;
