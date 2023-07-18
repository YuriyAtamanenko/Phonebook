import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  padding-right: 0px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Contact = styled.p`
  margin: 6px 0;
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border: none;
  background-color: inherit;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: white;

    border: 1px solid #b5b5b5;
  }
`;
