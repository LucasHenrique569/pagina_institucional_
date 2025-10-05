import NavBar from "../../components/navBar";
import Footer from "../../components/footer";

import "../app/globals.css";

export default function RootLayout({ children }) {
  const isAdmin = false;
  return (
    <html lang="pt-BR">
      <body>
        <NavBar isAdmin={isAdmin}/>
        <main>{children} </main>
        <Footer/>
      </body>
    </html>
  );
}
