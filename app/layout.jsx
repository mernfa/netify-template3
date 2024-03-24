import '../styles/globals.css';
import Header from '@/components/header';

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className=' p-4 flex flex-col gap-8 bg-white text-black dark:bg-zinc-800 '>
            <Header/> {children}
         </body>
      </html>
   )
}
