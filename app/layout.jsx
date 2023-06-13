import '@styles/globals.css';

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Team from '@sections/Team';



export const metadata={
    title:"Wohntraum Andalusia",
    description:"nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnmmmmmLanding Page"
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
          <Nav/>
         {children}
        </main>
        <Team />
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
