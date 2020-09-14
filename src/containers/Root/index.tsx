import React from 'react';
import Guest from 'containers/Guest';
import Main from 'containers/Main';
import useConnect from './connect';

const Root = () => {
  const { currentUser, loading } = useConnect();

  if (loading && !currentUser) return <p>loading...</p>;

  if (currentUser) return <Main />;

  return <Guest />;
};

export default Root;
