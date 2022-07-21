import React from 'react'
import { CurrentList } from './CurrentList'
import { Lists } from './Lists'

import { Container, Content } from './styles'

const screen: React.FC = () => {
  return (
    <Container>
      <Content>
        <Lists />
        <CurrentList />
      </Content>
    </Container>
  )
}

export default screen
