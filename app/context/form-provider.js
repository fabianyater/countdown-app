'use client';

import { createContext, useState } from 'react';

export const FormContext = createContext({});

export default function FormProvider({ children }) {
  const [isHidden, setIsHidden] = useState({})
  const value = { isHidden, setIsHidden }

  return <FormContext.Provider value={value}>
    {children}
  </FormContext.Provider>;
}