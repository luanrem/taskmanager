import { Button } from '@mui/material'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  .MuiButton-root {
    color: white;
    padding: 0;
    justify-content: start;
    align-items: center;
    text-transform: none;

    padding-left: 1rem;
  }

  .MuiTypography-root {
    font-size: 1.05em;
  }
`
export const TaskButton = styled(Button)`
  display: flex;
  width: 100%;
`
