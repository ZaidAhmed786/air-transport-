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
            <Link href="/ship">Ship</Link>
          </li>
          <li className="">
            <Link href="/Track">Track</Link>
          </li>
          <li className="">
            <Link href="/CustomerServiceFeedback">Services Feedback</Link>
          </li>

          <li>
            <Link href="/page-contact">Contact</Link>
          </li>
        </ul>
      </>
    );
}
