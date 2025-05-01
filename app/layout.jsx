import { Container } from '@mui/material'
import Navbar from './components/Navbar'
import './globals.css'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata = {
  title: 'Rick and Morty App',
  description: 'Rick and Morty Api',
  keywords: 'rickandmorty, next, react, api'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className} suppressHydrationWarning={true}>
        <Navbar />
        <Container>
          {children}
        </Container>
      </body>
    </html>
  )
}
