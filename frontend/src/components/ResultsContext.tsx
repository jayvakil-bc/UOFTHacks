import React, { createContext, useContext, useState, ReactNode } from 'react';
import {Results} from "../Types.ts";

// Define the type of the context
interface ResultsContextType {
    globalResults: Results,
    setGlobalResults: (globalResults: Results) => void,
    clearGlobalResults: () => void
}

// Create the context
const ResultsContext = createContext<ResultsContextType | undefined>(undefined);
const defaultResults: Results = {
    summary: "",
    // strengths: "", competitorAnalysis: "", breakevenAnalysis: "",
    // locationInsights: "", recommendations: "", conclusion: ""
};

// Create the provider component
export const AnalysisResultsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [globalResults, setResultsState] = useState<Results>(() => defaultResults);

    const setGlobalResults = (newResults: Results) => {
        setResultsState(newResults);
    };

    const clearGlobalResults = ()=>{
        setResultsState(defaultResults);
    };

    return (
        <ResultsContext.Provider value={{ globalResults, setGlobalResults, clearGlobalResults }}>
            {children}
        </ResultsContext.Provider>
    );
};

export const useResultsContext = (): ResultsContextType => {
    const context = useContext(ResultsContext);
    if (!context) {
        throw new Error('useResultsContext must be used within a AnalysisResultsProvider');
    }
    return context;
};
