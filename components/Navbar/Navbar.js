import { useRef } from "react"
import style from "./Navbar.module.css"
import searchImg from "../../assets/search.svg"
import Image from "next/image";
import { useRouter } from 'next/router';

export default function Navbar() {
  const searchRef = useRef();
  const router = useRouter();


  function handleSearchClick() {
    
    router.push(`/Items?search=${searchRef.current.value}`);
  }
  function handleLogoClick (){
    router.push( `/`);
  }

  return (
    <header className={style.Navbar}>
        <img src="/favicon.svg" className={style.Navbarimg} alt="Logo" onClick={handleLogoClick}/>
        <input id="search" name="search" ref={searchRef} placeholder="Buscar productos, marcas y más..." className={style.Navbarsearchinput} onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleSearchClick()
                        }
                    }}/>
        <button className={style.Navbarsearchbutton} onClick={handleSearchClick}><Image src={searchImg} alt="Search Button"/></button>
    </header>
  )
}