import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import { account } from '../data';

function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const { name, email, password } = formData;
  const { data } = account;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     navigate('/');
  //   }
  // }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    handleClick();
  };

  const handleClick = () => {
    for (var i = 0; i < data.length; i++) {
      if (email == data[i].email) {
        if (password == data[i].password) {
          localStorage.setItem('level', data[i].level);
          localStorage.setItem('token', true);
          navigate('/');
        } else {
          console.log('failed');
        }
      }
    }
  };

  return (
    <div className='flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <h2 className='mt-6 text-3xl font-bold text-center text-gray-900'>
            Sign in to your account
          </h2>
        </div>
        <form className='mt-8 space-y-6' onSubmit={onSubmit}>
          {/* {error && (
        <span className='flex items-center justify-center text-red-600'>
          {message}
        </span>
      )} */}
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='-space-y-px rounded-md shadow-sm'>
            <Input
              htmlFor='email'
              label='Email'
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              placeholder='user@email.com/admin@email.com'
              onChange={onChange}
            />
            <Input
              htmlFor='password'
              label='Password'
              id='password'
              name='password'
              type='password'
              placeholder='user/admin'
              onChange={onChange}
            />
          </div>

          <div className='flex items-center justify-between'></div>

          <div>
            <button
              type='submit'
              className='relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-yellow-500 border border-transparent rounded-md group hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
            >
              <span className='absolute inset-y-0 left-0 flex items-center pl-3'></span>
              Sign in
            </button>
            <p className='my-4 text-sm text-center'>
              Dont have an account?{' '}
              <Link to={'/register'} className='hover:underline'>
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
