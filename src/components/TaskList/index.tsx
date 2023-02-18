import { IconButton, Typography } from '@mui/material'
import { PropsWithChildren } from 'react'
import { TbDots } from 'react-icons/tb'

import { Container, TaskButton } from './styles'

export default function TaskList(props: PropsWithChildren<any>) {
  return (
    <Container>
      <TaskButton>
        <Typography>{props.children}</Typography>
      </TaskButton>
      <IconButton
        edge="end"
        color="primary"
        size="small"
        className="detailsButton"
      >
        <TbDots />
      </IconButton>
    </Container>
  )
}
