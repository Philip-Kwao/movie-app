"use client"
import { ThemeProvider } from 'next-themes'

const Providers = ({children}) => {
  return (
    <ThemeProvider enableSystem="true" attribute="class">
        <div className="dark:bg-slate-800 dark:text-gray-50 bg-slate-50 text-slate-700 transition-all duration-100 min-h-screen select-none">
            {children}
        </div>
    </ThemeProvider>
  )
}

export default Providers