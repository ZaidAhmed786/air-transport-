'use client'
import Link from "next/link"
import { useState } from 'react'

export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
      <>
        <ul className="navigation clearfix">
          <li className="current ">
            <Link href="/">Home</Link>
          </li>
          <li className="dropdown">
            <Link href="/page-faq">FAQ</Link>
          </li>
          <li className="dropdown">
            <Link href="/page-services">Services</Link>
          </li>

          <li>
            <Link href="/page-contact">Contact</Link>
          </li>
        </ul>
      </>
    );
}
