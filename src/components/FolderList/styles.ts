import styled from 'styled-components'
import { Accordion } from '@mui/material'

export const Container = styled.div``

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
