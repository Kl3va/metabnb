import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isPopUpOpen, setIsPopUpOpen] = useState(false)
  const [isFilter, setIsFilter] = useState(false)

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closePopUp = () => {
    setIsPopUpOpen(false)
  }

  const openPopUp = () => {
    setIsPopUpOpen(true)
  }

  return (
    <AppContext.Provider
      value={{
        closeSidebar,
        openSidebar,
        isSidebarOpen,
        isPopUpOpen,
        closePopUp,
        openPopUp,
        isFilter,
        setIsFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
