import React, { useState } from 'react'
import tw, { css, styled } from 'twin.macro'
import Link from 'next/link'

import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu'
import { GrClose } from '@react-icons/all-files/gr/GrClose'



const NavigationBar = () => {

    const openIcon = <GiHamburgerMenu />
    const closeIcon = <GrClose />

    const [show, setShow] = useState(false);
    const toggleMenu = () => setShow(!show);

    const Links = [
        { title: 'menu1', path: '/' },
        { title: 'menu2', path: '/' },
        { title: 'menu3', path: '/' },
        { title: 'menu4', path: '/' },
        { title: 'menu5', path: '/' },
    ];

    return (
        <Nav>
            <NavWrap>
                <NavItems>
                    <Link href="/">
                        <a>
                            <Logo>Twin</Logo>
                        </a>
                    </Link>
                    <Desktop>
                        {Links.map((nav) =>
                            <Lists key={nav.toString()}>
                                <Link href={nav.path} passHref>
                                    <a><LinkItem>{nav.title}</LinkItem></a>
                                </Link>
                            </Lists>
                        )}
                    </Desktop>

                    <Toggle onClick={toggleMenu}>
                        {show ? closeIcon : openIcon}
                    </Toggle>
                </NavItems>


                <MobileWrap css={show ? tw`` : tw`hidden`} >
                    {Links.map((nav) =>
                        <MobileList key={nav.toString()}>
                            <Link href={nav.path} passHref>
                                <a>
                                    <LinkItem>
                                        {nav.title}
                                    </LinkItem>
                                </a>
                            </Link>
                        </MobileList>
                    )}
                </MobileWrap>
            </NavWrap>
        </Nav >

    )
}


const Nav = styled.nav`
    ${tw` sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-80 border-b border-gray-200`}
    font-family: 'Jost', sans-serif;
`

const NavWrap = tw.div`
    max-w-screen-xl mx-auto px-0 md:px-4 
`

const Logo = styled.h1`
    ${tw`font-bold text-3xl px-2 md:px-0`}
    font-family: 'Jost', sans-serif;
`

const Toggle = tw.div`
    md:hidden px-2
`

const NavItems = tw.div`
    flex items-center justify-between h-16
`

const Desktop = tw.div`
    space-x-4 hidden md:flex 
`

const MobileWrap = tw.div`
    md:hidden absolute bg-white w-full  capitalize backdrop-filter backdrop-blur-lg bg-opacity-95
`

const MobileList = tw.div`
     text-center my-4

`

const Lists = tw.ul`

`

const LinkItem = tw.li`
    capitalize  text-gray-600 hover:text-purple-600 transition duration-300 list-none md:ml-4 ml-0 font-medium text-xl
`

export default NavigationBar