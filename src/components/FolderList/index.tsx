import {
  AccordionDetails,
  AccordionSummary,
  Button,
  IconButton,
  Typography,
} from '@mui/material'
import { PropsWithChildren, useState } from 'react'
import { MdOutlineExpandMore } from 'react-icons/md'
import { TbDots } from 'react-icons/tb'

import { AccordionButton, AccordionList, Container } from './styles'

export default function FolderList(props: PropsWithChildren<any>) {
  const [accordionOpened, setAccordionOpened] = useState<boolean>(false)

  function handleOpenAccordion() {
    setAccordionOpened(!accordionOpened)
  }

  function handleJustOpenAccordion() {
    !accordionOpened && setAccordionOpened(!accordionOpened)
  }

  return (
    <Container>
      <AccordionButton expanded={accordionOpened}>
        <IconButton
          edge="start"
          color="primary"
          aria-label="open accordion"
          size="small"
          onClick={handleOpenAccordion}
        >
          {/* <input hidden accept="image/*" type="file" /> */}
          <MdOutlineExpandMore className="expandButton" />
        </IconButton>
        <Button className="buttonLabel" onClick={handleJustOpenAccordion}>
          <Typography>{props.title}</Typography>
        </Button>
        <IconButton
          edge="end"
          color="primary"
          aria-label="open accordion"
          size="small"
        >
          <TbDots />
        </IconButton>
      </AccordionButton>
      <AccordionList expanded={accordionOpened} elevation={0} square>
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
