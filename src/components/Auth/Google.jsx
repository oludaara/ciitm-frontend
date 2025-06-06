import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/AuthSlice';

import { FcGoogle } from 'react-icons/fc';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Google = ({ text }) => {
   console.log('Google');

   let user = useSelector(state => state.auth.user);

   let dispatch = useDispatch();

   const login = useGoogleLogin({
      onSuccess: async credentialResponse => {
         try {
            console.log('credentialResponse', credentialResponse);

            let token = credentialResponse.access_token;
            console.log('token', token);

            let res = await axios.post(
               `/api/auth/google?token=${token}`,
               {},
               { withCredentials: true },
            );

            console.log('res', res);

            let user = res.data.user;

            console.log('user', user);

            dispatch(setUser(user));
         } catch (error) {
            console.log('Login Failed', error);
         }
      },
      onError: error => {
         console.log('Login Failed', error);
      },
   });

   return (
      <button
         className='flex items-center justify-center gap-2 rounded-lg w-full text-[1.05vw] max-[999px]:text-[3.05vw]'
         onClick={e => {
            e.preventDefault();
            login();
         }}
      >
         <FcGoogle className='text-3xl' /> {text}
      </button>
   );
};
Google.propTypes = {
   text: PropTypes.string,
};

Google.defaultProps = {
   text: 'Sign in with Google',
};

export default Google;
