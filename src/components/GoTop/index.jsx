import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';
import * as Styled from './style';

export const GoTop = () => {
  return (
    <Styled.Container href="#" aria-label="Go to top" title="Go To top">
      <KeyboardArrowUp />
    </Styled.Container>
  );
};
