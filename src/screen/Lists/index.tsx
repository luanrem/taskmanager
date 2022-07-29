import {
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from '@mui/material'
import { Container, ButtonMenu, AccordionList } from './styles'

import {
  BsFillCalendar3RangeFill,
  BsFillCalendarDateFill,
  BsFillInboxFill,
} from 'react-icons/bs'
import { MdOutlineExpandMore } from 'react-icons/md'

export function Lists() {
  return (
    <Container
      width={240}
      height={Infinity}
      minConstraints={[200, Infinity]}
      maxConstraints={[300, Infinity]}
      className="app-sidebar"
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        {/* // TODO disable uppercase */}
        <ButtonMenu>
          <BsFillCalendarDateFill />
          <div>
            <p>Today</p>
          </div>
          <p>15</p>
        </ButtonMenu>
        <ButtonMenu>
          <BsFillCalendar3RangeFill />
          <div>
            <p>Next 7 days</p>
          </div>
          <p>15</p>
        </ButtonMenu>
        <ButtonMenu>
          <BsFillInboxFill />
          <div>
            <p>Inbox</p>
          </div>
          <p>15</p>
        </ButtonMenu>
      </Stack>
      <hr />
      <Typography>Lists</Typography>
      {/* // TODO customize the Accordion */}
      <div className="accordionProperties">
        <AccordionList elevation={0} square>
          <AccordionSummary
            expandIcon={<MdOutlineExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </AccordionList>
      </div>
    </Container>
  )
}
