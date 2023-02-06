import { Typography } from '@mui/material'
import { PropsWithChildren } from 'react'
import { BsFillCalendar3RangeFill } from 'react-icons/bs'

import { Container, TaskButton } from './styles'

export default function ListOfTaskButton(props: PropsWithChildren<any>) {
  return (
    <Container>
      <TaskButton>
        <Typography>{props.children}</Typography>
      </TaskButton>
    </Container>
  )
}
