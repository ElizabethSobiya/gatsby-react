import React, {useState, useEffect} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {Nav, NavBarContainer, NavIcon, NavLogo,MobileIcon, NavLink, NavMenu,NavItem} from './NavbarElements'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleClick =()=> setClick(!click);

    const changeNav =() =>{
        if(window.scroll >=80){
            setScroll(true)
        }else{
            setScroll(false)
        }
    }

    useEffect(()=>{
        changeNav()
        window.addEventListener('scroll', changeNav)
    },[])
   return (
    <>
    <IconContext.Provider value = {{color: '#141414'}}>
        <Nav active ={scroll} click={click}>
            <NavBarContainer>
                    <NavLogo to ='/'>
                        <NavIcon/>
                        EXPLORE
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes/> : <FaBars/>}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                           <NavItem>
                            <NavLink to ='/'>Home</NavLink>
                           </NavItem>
                           <NavItem>
                            <NavLink to ='/images'>Images</NavLink>
                           </NavItem>
                           <NavItem>
                            <NavLink to ='/destination'>Destination</NavLink>
                           </NavItem>
                        </NavMenu>
            </NavBarContainer>
        </Nav>
     </IconContext.Provider>
    </>
   )
}


export default Navbar