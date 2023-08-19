import React from 'react';
import { Navigate } from 'react-router-dom';

const Authguard = ({ element }: { element: React.ReactElement }) => {

  const token = localStorage.getItem('token');

  if (token) {
    return element;
  }

  return <Navigate to="/signin" />;
};

export default Authguard;
