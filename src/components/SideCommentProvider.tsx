import { createContext, useState, useContext } from 'react'
import type { SideCommentType, HasReactNodeChildren } from '@/lib/Interfaces'

const SideCommentContext = createContext<SideCommentType | undefined>(undefined)

const SideCommentProvider = ({ children }: HasReactNodeChildren) => {
  const [sideComment, setSideComment] = useState<boolean>(true)
  return (
    <SideCommentContext.Provider value={{ sideComment, setSideComment }}>
      {children}
    </SideCommentContext.Provider>
  )
}

const useSideCommentContext = () => {
  const context = useContext(SideCommentContext)
  if (context === undefined) {
    throw new Error(
      'useSideCommentContext must be used within a SideCommentProvider'
    )
  }
  return context
}

export { SideCommentProvider, SideCommentContext, useSideCommentContext }
