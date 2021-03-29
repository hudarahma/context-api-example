import React, { createContext } from 'react'


// Declare my context
export const MyContext = createContext(null);

// Create my initial state
const initialState = {
  fisrtName: 'Lem',
  lastName: 'Canady',
  roomNumber: '15',
}

// Make my provider Component
const ContextProvider = ({children}) => {
  return <MyContext.Provider value={initialState}>{children}</MyContext.Provider>
}
// Pass that component initial state

export default ContextProvider;
