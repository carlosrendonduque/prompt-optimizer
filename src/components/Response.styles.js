import styled from 'styled-components';

export const ResponseContainer = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

export const Message = styled.p`
  font-size: 1.2rem;
  color: ${({ isError }) => (isError ? 'red' : 'black')};
`;

export const Loading = styled.p`
  font-size: 1.2rem;
  color: #007bff;
`;
