import { AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { PropsWithChildren } from 'react'
import { MdOutlineExpandMore } from 'react-icons/md'

import { AccordionList, Container } from './styles'

export default function FolderList(props: PropsWithChildren<any>) {
  return (
    <Container>
      <AccordionList elevation={0} square>
        <AccordionSummary
          expandIcon={<MdOutlineExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{props.children}</Typography>
        </AccordionDetails>
      </AccordionList>
    </Container>
  )
}
