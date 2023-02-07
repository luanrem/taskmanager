/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components'
import { Accordion } from '@mui/material'

interface AccordionProps {
  expanded: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


  .buttonLabel {
    box-shadow: none;
    text-transform: none;
    display: flex;
    justify-content: start;
    padding: 0;
    color: white;
  }
`

export const AccordionButton = styled.div<AccordionProps>`
  width: 100%;
  display: grid;
  grid-template-columns: 10% 80% 10%;
  justify-content: start;
  align-items: center;

  svg {
    color: white;
  }

  .expandButton {
    transition: 300ms ease all;
    transform: ${props =>
    props.expanded ? css`rotate(0deg)` : css`rotate(-90deg)`};
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
    width: 100%;
  }
`
