import { Button, ButtonProps } from '@mui/material'
import { ResizableBox } from 'react-resizable'
import styled from 'styled-components'

export const Container = styled(ResizableBox).attrs({
  resizeHandles: ['e'],
  axis: 'x',
})`
  border-right: 1px solid #252131;
  height: 100vh;
  .content {
    display: flex;
    flex-direction: column;
    /* height: 100vh; */
  }

  hr {
    width: 100%;
  }
`

export const ButtonMenu = styled(Button)<ButtonProps>`
  width: 90%;
  && {
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    svg {
      width: 2rem;
    }

    div {
      width: 100%;
      text-align: left;
      padding: 0 1rem;
    }

    &:hover {
      background-color: rgb(255, 255, 255, 0.1);
    }
  }
`
