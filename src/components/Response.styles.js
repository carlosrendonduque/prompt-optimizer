import styled from 'styled-components';

export const ResponseContainer = styled.div`
  margin: 2rem auto;
  padding: 1.5rem;
  max-width: 800px;
  text-align: left;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const Message = styled.p`
  font-size: 1.2rem;
  color: ${({ isError }) => (isError ? 'red' : 'black')};
  line-height: 1.6;
`;

export const Loading = styled.p`
  font-size: 1.2rem;
  color: #007bff;
  text-align: center;
`;
