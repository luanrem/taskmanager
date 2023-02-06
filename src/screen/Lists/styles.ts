import { Accordion, Button } from '@mui/material'
import { ResizableBox } from 'react-resizable'
import styled from 'styled-components'
// import { styled as muiStyled } from '@mui/material/styles'

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

export const ButtonMenu = styled(Button)`
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
export const AccordionList = styled(Accordion)`
  &:before {
    display: none;
  }
  & .MuiAccordionSummary-expandIconWrapper {
    transform: rotate(-90deg);
  }
  & .MuiAccordionSummary-expandIconWrapper.Mui-expanded {
    transform: rotate(0deg);
  }
  & .MuiAccordionSummary-root {
    flex-direction: row-reverse;
    min-height: 2rem;
    height: 2rem;

    .MuiAccordionSummary-expandIconWrapper {
      color: white;
    }
  }
  && {
    background-color: transparent;
    box-shadow: none;
    color: white;
    margin: 0;
    .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded {
      min-height: 2rem;
    }
  }
  &&.MuiAccordion-root {
    margin: 0;
  }
`
export const TaskButton = styled(Button)`
  display: flex;
`

export const ContentDivider = styled.hr`
  color: white;
  border: 0;
  height: 0.5px;
  margin: 0.5rem 0;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.75),
    rgba(255, 255, 255, 0.75),
    rgba(0, 0, 0, 0)
  );
`
