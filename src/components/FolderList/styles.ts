import styled from 'styled-components'
import { Accordion } from '@mui/material'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .accordionButton {
    width: 100%;
    display: grid;
    grid-template-columns: 10% 90%;
    justify-content: start;
    align-items: center;
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
    background-color: red;
    flex-direction: row-reverse;
    min-height: 0.1rem;
    height: 0.1rem;

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
      min-height: 0.1rem;
    }
  }
  &&.MuiAccordion-root {
    margin: 0;
  }
`
