import Socials from "../social/Socials";
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div>
      <div onClick={()=>setMenuOpen(false)} className={menuOpen?"backdrop": ""}> 
      </div>
      <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#projects">Projects</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#service">Services</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      </div>
      <Socials activeMenu={menuOpen}/>
    </div>
  );
}
