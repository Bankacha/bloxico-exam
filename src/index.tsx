import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import {createTheme, ThemeProvider} from '@mui/material'
import App from './App'
import {Provider} from 'react-redux'
import store from './store'
import {MetaMaskProvider} from '@metamask/sdk-react'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
const theme = createTheme({
    palette: {
        primary: {
            main: '#69A297',
            contrastText: "#fff"
        },
    },
})

root.render(
    // <React.StrictMode>
    <MetaMaskProvider debug={false} sdkOptions={{
        logging: {
            developerMode: false,
        },
        communicationServerUrl: process.env.REACT_APP_COMM_SERVER_URL,
        checkInstallationImmediately: false, // This will automatically connect to MetaMask on page load
        dappMetadata: {
            name: "Bloxico Exam",
            url: window.location.host,
        }
    }}>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <App/>
            </Provider>
        </ThemeProvider>
    </MetaMaskProvider>
    // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
