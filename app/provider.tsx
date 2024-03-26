
"use client"
import { ThemeProvider } from "next-themes";
import { useState,useEffect,ReactNode } from "react";

interface ProviderProps {
    children: ReactNode;
}

export default function Provider({ children }: ProviderProps){
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
      },[])
      if(!mounted){
          return <>{children}</>;
      }
    return <ThemeProvider>{children}</ThemeProvider>
}

