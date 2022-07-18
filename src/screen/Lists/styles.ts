import { ResizableBox } from 'react-resizable';
import styled from 'styled-components';

export const Container = styled(ResizableBox).attrs({
  resizeHandles: ['e'],
  axis: 'x'
})`
      border-right: 1px solid #252131;
      height: 100vh;
    .content {
      display: flex;
      flex-direction: column;
      /* height: 100vh; */
    }
  `
