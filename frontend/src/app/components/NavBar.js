import React from 'react'
import Link from 'next/link'

const NavBar = ({containerStyles}) => {
  return (
    <nav className="bg-darkBlue">
        <ul className={`${containerStyles} font-GothamBook border-b-2 border-b-blue fixed justify-left w-full flex gap-5`}>
            <li>
                <Link className="pl-10 ml-10" href='/#home'>Home</Link>
            </li>
            <li>
                <Link href='/#upload'>Upload</Link>
            </li>
            <li>
                <Link href='/#instructions'>Instructions</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar