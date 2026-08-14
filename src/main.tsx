import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { WizzTechProtectionProvider } from '@wizztech/protection'
import "@wizztech/protection/dist/style.css"
createRoot(document.getElementById('root')!).render(

<StrictMode>
    <WizzTechProtectionProvider platformUrl="https://wizztech-demo-website-platform.netlify.app">
        <App />
    </WizzTechProtectionProvider>
  </StrictMode>
)
