import { Container } from './styles'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { useEffect } from 'react'

export function TasksList() {

  const { width } = useWindowSize({ watch: false })

  useEffect(() => {
    console.log('width', width)
  }, [width])

  return (
    <Container
      width={0.4*width}
      height={Infinity}
      minConstraints={[0.5*width - 300, Infinity]}
      maxConstraints={[0.8*width - 300, Infinity]}
    >
      <div>TasksList</div>
    </Container>
  )
}
