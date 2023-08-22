import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Authguard = ({ element }: { element: React.ReactElement }) => {

  const jwt = Cookies.get('jwt');

  if (jwt) {
    return element;
  } else {
    return <Navigate to="/signin" />;
  }

};

export default Authguard;
