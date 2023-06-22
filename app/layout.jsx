import '@styles/globals.css';
import {Nav, Navigation, Provider, Footer } from "@components";





export const metadata={
    title:"Wohntraum Andalusia",
    description:"Landing Page",    
}



const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <Provider>
    
        <div className='main'>
           <div className='gradient'/>
        </div>

        <main className='app'>
      <Navigation />
      <Nav />
         {children}
        </main>
        <Footer />
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
