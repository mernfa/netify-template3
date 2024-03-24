import '../styles/globals.css';


export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className=' bg-white text-black dark:bg-zinc-800 '>
            {children}
         </body>
      </html>
   )
}
