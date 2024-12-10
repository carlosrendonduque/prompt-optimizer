import React from 'react';
import { ResponseContainer, Message, Loading } from './Response.styles';

const Response = ({ loading, error, response }) => (
  <ResponseContainer>
    <h2>Response:</h2>
    {loading && <Loading>Loading...</Loading>}
    {error && <Message isError>{error}</Message>}
    {response && <Message>{response}</Message>}
  </ResponseContainer>
);

export default Response;
