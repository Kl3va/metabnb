import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSubtextOpen, setIsSubtextOpen] = useState(false)

  const closeSubtext = () => {
    setIsSubtextOpen(false)
  }

  return (
    <AppContext.Provider value={{ isSubtextOpen, closeSubtext }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
