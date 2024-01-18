"use client"
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300"],
  display: "swap",
});
import Navbar from "./components/Navbar/Navbar";
import Apply from "./components/apply/Apply";
import Profile from "./components/profiles_section/Profile";
import "./styles/App.css";
import TiltWarning from "./TiltWarning";

export default function Home() {

  return (
    <main className={poppins.className}>
      <div className="App">
          <TiltWarning />
        <div className="navbar" >
          <Navbar></Navbar>
        </div>
        <div className="Apply" >
          <Apply></Apply>
        </div>
        <div className="Profile" style={{ color: "black" }}>
          <Profile></Profile>
        </div>
      </div>
    </main>
  );
}
