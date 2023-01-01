import { useState } from 'react';
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '../components/Input';
import { account } from '../data';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const navigate = useNavigate();

  const { name, email, password, password2 } = formData;
  const { data } = account;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error('Passwords do not match');
    } else {
      handleRegister();
    }
  };

  const handleRegister = () => {
    const index = data.findIndex((object) => object.email === email);
    if (index === -1) {
      data.push({
        name: name,
        email: email,
        password: password,
        level: 'user',
      });
      toast.success('Registration successful');
      navigate('/login');
    } else {
      toast.error('Data already in use');
    }
  };

  return (
    <div className='flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <h2 className='mt-6 text-3xl font-bold text-center text-gray-900'>
            Create your account
          </h2>
        </div>
        <form className='mt-8 space-y-6' onSubmit={onSubmit}>
          <input type='hidden' name='remember' defaultValue='true' />

          <div className='-space-y-px rounded-md shadow-sm'>
            <Input
              htmlFor='name'
              label='Name'
              id='name'
              name='name'
              type='text'
              onChange={onChange}
              required
            />
            <Input
              htmlFor='email-address'
              label='Email address'
              id='email-address'
              name='email'
              type='email'
              onChange={onChange}
              required
            />
            <Input
              htmlFor='password'
              label='Password'
              id='password'
              name='password'
              type='password'
              onChange={onChange}
              required
            />
            <Input
              htmlFor='password2'
              label='Confirm Password'
              id='password2'
              name='password2'
              type='password'
              onChange={onChange}
              required
            />
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center text-sm'>
              <p className='font-medium'>
                By creating an account, I consent to the processing of my
                personal data in accordance with the <b>PRIVACY POLICY</b>.
              </p>
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-yellow-500 border border-transparent rounded-md group hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
            >
              <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                {/* <LockClosedIcon
                  className='w-5 h-5 text-green-500 group-hover:text-green-400'
                  aria-hidden='true'
                /> */}
              </span>
              Signup
            </button>
            <p className='my-5 text-sm text-center'>
              Already have an account?{' '}
              <Link to={'/login'} className='hover:underline'>
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
