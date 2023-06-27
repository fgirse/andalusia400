import "../styles/globals.css";

import { Footer, Menu, Navbar, Navigation, Provider }from "../components";
export const metadata = {
  title: "Wohntraum Andalusia",
  description: "Landingpage",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
          <Navbar />
            
            
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;