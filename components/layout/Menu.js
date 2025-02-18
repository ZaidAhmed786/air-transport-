import Link from "next/link"

export default function Menu() {

    return (
      <>
        <ul className="navigation">
          <li className="current ">
            <Link href="/">Home</Link>
          </li>
          <li className="">
            <Link href="/page-faq">FAQ</Link>
          </li>
          <li className="">
            <Link href="/page-services">Services</Link>
          </li>

          <li className="">
            <Link href="/track-project">Projects</Link>
          </li>

          <li>
            <Link href="/page-contact">Contact</Link>
          </li>
        </ul>
      </>
    );
}
