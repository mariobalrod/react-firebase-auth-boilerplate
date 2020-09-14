import React from 'react'
import Root from 'containers/Root'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/GlobalStyle'
import theme from 'styles/themes'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Root/>
        </ThemeProvider>
    )
}

export default App
