import '@styles/globals.css';

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Team from '@sections/Team';
import { Architects_Daughter } from 'next/font/google'

const archidaught = Architects_Daughter({ subsets: ['latin'], weights: ['400'] });



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
