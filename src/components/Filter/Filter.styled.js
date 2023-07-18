import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
`;

export const Input = styled.input`
  text-align: center;
  font-size: 14px;
  height: 25px;
  width: 100%;
  &::placeholder {
    color: #cecece;
  }
`;
