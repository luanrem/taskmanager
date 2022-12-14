import {
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Typography,
} from '@mui/material'
import { PropsWithChildren } from 'react'
import { MdOutlineExpandMore } from 'react-icons/md'

import { AccordionList, Container } from './styles'

export default function FolderList(props: PropsWithChildren<any>) {
  return (
    <Container>
      <div className="accordionButton">
        <IconButton
          edge="start"
          color="primary"
          aria-label="open accordion"
          size="small"
        >
          {/* <input hidden accept="image/*" type="file" /> */}
          <MdOutlineExpandMore />
        </IconButton>
        <Typography>Accordion 1</Typography>
      </div>
      <AccordionList elevation={0} square>
        <AccordionSummary
          // expandIcon={<MdOutlineExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        ></AccordionSummary>
        <AccordionDetails>
          <Typography>{props.children}</Typography>
        </AccordionDetails>
      </AccordionList>
    </Container>
  )
}
