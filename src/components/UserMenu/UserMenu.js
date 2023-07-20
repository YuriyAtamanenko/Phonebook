import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from 'redux/selectors';
import { logOut } from 'redux/operations';
import { Box, User, Button } from './UserMenu.styled';

import { FiLogOut } from 'react-icons/fi';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  return (
    <Box>
      <User>Hello, {userName}</User>

      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout <FiLogOut size={16} style={{ marginLeft: 2 }} />
      </Button>
    </Box>
  );
}
