import { Typography } from '@mui/material'
import { PropsWithChildren } from 'react'

import { Container, TaskButton } from './styles'

export default function ListOfTaskButton(props: PropsWithChildren<any>) {
  return (
    <Container className="test">
      <TaskButton>
        <Typography>{props.children}</Typography>
      </TaskButton>
    </Container>
  )
}
