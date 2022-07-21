import { Container } from './styles'
import { TaskContent } from './TaskContent'
import { TasksList } from './TasksList'

export function CurrentList() {
  return (
    <Container>
      <TasksList />
      <TaskContent />
    </Container>
  )
}
