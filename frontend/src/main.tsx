import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import {UserFormProvider} from "./components/FormContext.tsx";
import {AnalysisResultsProvider} from "./components/ResultsContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <UserFormProvider>
        <AnalysisResultsProvider>
      <App />
        </AnalysisResultsProvider>
        </UserFormProvider>
    </BrowserRouter>
  </StrictMode>,
)
