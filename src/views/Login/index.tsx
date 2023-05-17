import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loginLogo from '../../assets/login.png';
import loginLogo2 from '../../assets/login2.png';
import Checkbox from '../../components/common/Checkbox';
import { Input } from '../../components/common/Input';
import { authenticationAction } from '../../redux/actions';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authentication } = useSelector((state: any) => state.authentication);
  console.log(authentication);
  const dispatch = useDispatch();
  console.log('caa');
  return (
    <>
      <div dir='rtl' className='flex h-full'>
        <div className='w-3/5 relative'>
          <div className='absolute left-5 top-5 w-36 '>
            لورم ایپسوم یا طرح‌نما به متنی بی‌معنی در صنعت چاپ، صفحه‌آرایی و
            طراحی گرافیک گفته می‌شود
          </div>
          <img className='absolute bottom-0  right-0' src={loginLogo2} />
        </div>
        <div className='bg-[#F8F8FB] flex flex-col w-2/5 justify-center p-32 rtl'>
          <div className='flex items-center'>
            <img src={loginLogo} />
            <div>
              <p>ورود به حساب کاربری</p>
              <p>شرکت پخش مک دونالد</p>
            </div>
          </div>
          <div>
            <form
              className=' flex flex-col'
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Input setEntry={setEmail} title={'نام کاربری'} />
              <Input setEntry={setPassword} title={'کلمه عبور'} />
              <div />
              <Checkbox title='مرا به خاطر داشته باش' />
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
          <div>
            <span>یا</span>
          </div>
          <button>ورود از طریق حساب گوگل</button>
        </div>
      </div>
    </>
  );
}

export default Login;
