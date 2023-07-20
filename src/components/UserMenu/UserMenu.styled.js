import styled from '@emotion/styled';

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const User = styled.p`
  margin: 0;
  font-weight: 700;
  color: #3b4c98;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: #a5a5a5;
  font-size: 15px;
  cursor: pointer;
  border: none;
  background-color: inherit;
  &:hover,
  &:focus {
    color: #3b4c98;
  }
`;
