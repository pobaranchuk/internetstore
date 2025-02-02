import { Routing } from '../common/router/Routing.tsx'
import { GlobalStyled } from '@styles/GlobalStyled.ts'
import { ThemeProvider } from "styled-components";
import { Theme } from '@styles/Theme.ts'

export function App() {
  return (
    <>
      <GlobalStyled />
      <ThemeProvider theme={Theme}>
        <Routing/>
      </ThemeProvider>
    </>
  )
}
