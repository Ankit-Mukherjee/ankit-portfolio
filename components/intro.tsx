"use client"

import { createContext, useContext, useState } from "react"

type Ctx = { ready: boolean; setReady: (v: boolean) => void }
const IntroContext = createContext<Ctx>({ ready: true, setReady: () => {} })

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false)
  return <IntroContext.Provider value={{ ready, setReady }}>{children}</IntroContext.Provider>
}

export const useIntro = () => useContext(IntroContext)
