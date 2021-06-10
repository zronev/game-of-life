import React, {
  FC,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react'
import { patterns, Pattern } from '../../../patterns'

type Context = [Pattern, Dispatch<SetStateAction<Pattern>>]

export const PatternContext = createContext<Context>({} as Context)

export const PatternProvider: FC = ({ children }) => {
  const [pattern, setPattern] = useState<Pattern>(patterns[0])

  return (
    <PatternContext.Provider value={[pattern, setPattern]}>
      {children}
    </PatternContext.Provider>
  )
}
