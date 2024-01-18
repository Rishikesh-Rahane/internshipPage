"use client"
import "./styles/navbar.css"
import logo from "../../../../public/assets/innovate_logo.png"
import Image from 'next/image'
import Link from "next/link"
import Menu from "../../../../public/assets/Menu.png"
import CloseIcon from "../../../../public/assets/CloseIcon-removebg.png"
import { useRef,useState,useEffect } from "react"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    const mainContainer = document.querySelector('.main');
    mainContainer.classList.toggle('expanded', !menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // const scrollToSection = (ref,event) => {
  //   event.preventDefault();
  //   if (ref.current) {
  //     setTimeout(() => {
  //       ref.current.scrollIntoView({
  //         behavior: 'smooth',
  //         block: 'start',
  //       });
  //     }, 3000); // Set the delay in milliseconds (adjust as needed)
  //   }
  //   closeMenu(); // Close the menu after clicking a link
  // };

  useEffect(() => {
    // Add a click event listener to close the menu when clicking outside of it
    const handleClickOutside = (event) => {
      const closeIcon = document.querySelector('.closeIcon');

      if (menuRef.current && !menuRef.current.contains(event.target) && event.target !== closeIcon) {
        closeMenu();
        const mainContainer = document.querySelector('.main');
        mainContainer.classList.remove('expanded');
      }
    };

    // Add a scroll event listener to close the menu when the user starts to scroll
    const handleScroll = () => {
      closeMenu();
      const mainContainer = document.querySelector('.main');
      mainContainer.classList.remove('expanded');
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);


  return (
    <div className='main'>
      <div className='innovate-icon'>
        <Image src={logo} className='innovate-icon'></Image>
      </div>
      <div className='links-section'>
      <div className='navlinks'>
        <Link className="nav-tags tag1-size" href="#about">About Us</Link>
        <Link className="nav-tags tag2-size" href="#profile">View Profiles</Link>
        
      </div>
      <button className='login-button'><Link href="#form" style={{all:"unset"}}>Apply for Internship</Link></button>
      </div>
      <div className={'hamburgerMenu'} onClick={toggleMenu}>
        <Image src={menuOpen ? CloseIcon : Menu} alt="menu-image" className={`menuIcon ${menuOpen ? 'closeIcon' : 'menuIcon'}`} />
      </div>
      <div className="menu-items">
      {menuOpen && (
        
        <div ref={menuRef} className='mobileMenu links-section'>
          
          <Link href="#about"  className='mobileNavLink' >
            About Us
          </Link>
          <Link href="#profile"  className='mobileNavLink'>
            View Profiles
          </Link>
          <button className='login-button resp-button' >
            <Link href={"#form"} style={{all:"unset"}}>Apply for Internship</Link>
          </button>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar