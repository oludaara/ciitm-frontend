import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import ErrorPage from './ErrorPage';

const Proctected_Admin = () => {
   let student = useSelector(state => state.auth.user);

   if (!student) {
      return <ErrorPage />;
   }

   return (
      <>{student.role !== 'admin' ? <ErrorPage /> : <Outlet />}</>
   );
};

export default Proctected_Admin;
