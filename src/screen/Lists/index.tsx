import { Stack, Typography } from '@mui/material'
import { Container, ButtonMenu, TaskButton } from './styles'

import {
  BsFillCalendar3RangeFill,
  BsFillCalendarDateFill,
  BsFillInboxFill,
} from 'react-icons/bs'
import FolderList from '../../components/FolderList'
// import List from '../../mock.ts'
import ListOfTaskButton from '../../components/ListOfTaskButton'

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
      <FolderList>
        <TaskButton>
          <BsFillCalendar3RangeFill />
          <p>Lista de afazeres</p>
        </TaskButton>
        <ListOfTaskButton>Lista 2</ListOfTaskButton>
        <Typography>Teste second list</Typography>
        <Typography>Teste second list</Typography>
        <Typography>Teste second list</Typography>
      </FolderList>
    </Container>
  )
}
