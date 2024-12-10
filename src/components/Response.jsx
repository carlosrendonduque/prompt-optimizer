import React, { useState } from 'react';
import { ResponseContainer, Title, Message, CollapseButton } from './Response.styles';

const Response = ({ loading, error, response }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (loading) {
    return (
      <ResponseContainer>
        <Message>Loading...</Message>
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
      <Title>
        Response:
        <CollapseButton onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? 'Expand' : 'Collapse'}
        </CollapseButton>
      </Title>
      {!isCollapsed && <Message>{response || 'No response available.'}</Message>}
    </ResponseContainer>
  );
};

export default Response;
