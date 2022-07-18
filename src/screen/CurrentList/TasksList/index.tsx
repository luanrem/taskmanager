import { Container } from './styles'

export function TasksList() {
  return (
    <Container
      width={(1000 - 300) / 2}
      height={Infinity}
      minConstraints={[500, Infinity]}
      maxConstraints={[1000 - 300 - 100, Infinity]}
    >
      <div>TasksList</div>
    </Container>
  )
}
