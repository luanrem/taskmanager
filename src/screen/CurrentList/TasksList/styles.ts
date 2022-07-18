import styled from 'styled-components';
import { ResizableBox } from 'react-resizable';

export const Container = styled(ResizableBox).attrs({
    resizeHandles: ['e'],
    axis: 'x'
  })`
    border-right: 1px solid #252131;
    height: 100vh;
`;
