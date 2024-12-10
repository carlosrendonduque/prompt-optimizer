import React from 'react';
import { ResponseContainer, Title, Message, Loading } from './Response.styles';

const Response = ({ loading, error, response }) => {
  if (loading) {
    return (
      <ResponseContainer>
        <Loading>Loading...</Loading>
      </ResponseContainer>
    );
  }

  if (error) {
    return (
      <ResponseContainer>
        <Message isError>{error}</Message>
      </ResponseContainer>
    );
  }

  return (
    <ResponseContainer>
      <Title>Response:</Title>
      <Message>{response || 'No response available.'}</Message>
    </ResponseContainer>
  );
};

export default Response;
