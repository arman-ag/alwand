import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loginLogo from '../../assets/login.png';
import loginLogo2 from '../../assets/login2.png';
import { Button } from '../../components/common/Button';
import Checkbox from '../../components/common/Checkbox';
import { Input } from '../../components/common/Input';
import { authenticationAction } from '../../redux/actions';

function Login() {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { authentication } = useSelector((state: any) => state.authentication);

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
              <Input setEntry={setUserName} title={'نام کاربری'} />
              <Input setEntry={setPassword} title={'کلمه عبور'} />
              <div />
              <Checkbox title='مرا به خاطر داشته باش' />
              <Button
                name='ورود'
                actions={() =>
                  dispatch(
                    authenticationAction.authenticateSend({
                      email: userName,
                      password,
                    })
                  )
                }
              />
              <div className='flex'>
                <a href='#'>ثبت نام</a>
                <p>کاربر جدید هستید </p>
              </div>
            </form>
          </div>
          <div>
            <span>یا</span>
          </div>
          <Button name='ورود از طریق حساب گوگل' />
        </div>
      </div>
    </>
  );
}

export default Login;
