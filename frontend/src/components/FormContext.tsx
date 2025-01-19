import React, { createContext, useContext, useState, ReactNode } from 'react';
import {Form} from "../Types.ts";

// Define the type of the context
interface FormContextType {
    globalForm: Form,
    setGlobalForm: (globalForm: Form) => void,
    clearGlobalForm: () => void
}

// Create the context
const FormContext = createContext<FormContextType | undefined>(undefined);
const defaultForm: Form = {location: "", restaurantType: "", capital:"",
                        size:"", description:"",price:""};

// Create the provider component
export const UserFormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [globalForm, setFormState] = useState<Form>(() => defaultForm);

    const setGlobalForm = (newForm: Form) => {
        setFormState(newForm);
    };

    const clearGlobalForm = ()=>{
        setFormState(defaultForm);
    };

    return (
        <FormContext.Provider value={{ globalForm, setGlobalForm, clearGlobalForm }}>
            {children}
        </FormContext.Provider>
    );
};

export const useFormContext = (): FormContextType => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useFormContext must be used within a UserFormProvider');
    }
    return context;
};
