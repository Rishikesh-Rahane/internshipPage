import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./styles/App.css";
import 'react-toastify/dist/ReactToastify.css';
import favicon from "../../public/assets/innovate_logo.png"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Internship Page",
  description: "Rablo Innovate Internship Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Roboto:ital,wght@0,100;0,300;1,100;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}
          <ToastContainer/>
      </body>
    </html>
  );
}
