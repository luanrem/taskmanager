import { Stack } from '@mui/material'
import { Container, ButtonMenu } from './styles'

import {
  BsFillCalendar3RangeFill,
  BsFillCalendarDateFill,
  BsFillInboxFill,
} from 'react-icons/bs'

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
    </Container>
  )
}
