import { Button } from '@mui/material'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`
export const TaskButton = styled(Button)`
  display: flex;
  align-content: center;
  line-height: 1.5rem;

  .MuiButton-root {
    box-shadow: none;
    text-transform: none;
    display: flex;
    justify-content: start;
    padding: 0;
    color: white;
  }
`
