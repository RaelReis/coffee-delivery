import { ReactNode } from 'react'
import { DefaultContainerContainer } from './style'

interface DefaultContainerProps {
  children: ReactNode
}

export function DefaultContainer({ children }: DefaultContainerProps) {
  return <DefaultContainerContainer>{children}</DefaultContainerContainer>
}
