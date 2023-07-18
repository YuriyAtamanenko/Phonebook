import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 16px;
  border-bottom: 1px solid gray;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  font-size: 18px;
  font-weight: 600;
`;

export const Input = styled.input`
  text-align: center;
  height: 25px;
  font-size: 16px;
  font-weight: 500;
`;

export const Submit = styled.button`
  display: flex;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;

  height: 35px;
  width: 200px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  color: white;
  background-color: #3b4c98;
  border: none;
  border-radius: 3px;
  &:hover,
  &:focus {
    background-color: #5a73e2;
  }
`;
