import Link from 'next/link'
import { useGlobalContext } from '../../../context/MyGlobalContext'
import headerStyles from './header.module.css'

export default function Header() {
    const { menuIsOpen, setMenuIsOpen } = useGlobalContext()

    const handleHamburgerMenuOnClick = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    return (
        <div className={headerStyles.header_container}>
            <Link href="/" passHref>
                <h2>G3 Sports</h2>
            </Link>
            <div className={headerStyles.hamburger_menu} onClick={() => handleHamburgerMenuOnClick()}>
                <span className={headerStyles.hamburger_menu_line}></span>
                <span className={headerStyles.hamburger_menu_line}></span>
                <span className={headerStyles.hamburger_menu_line}></span>
            </div>
            <div className={headerStyles.header_list_item_container}>
                <Link href="/services" passHref>
                    <span>Tennis Services</span>
                </Link>
                <Link href="/about" passHref>
                    <span>About</span>
                </Link>
                <Link href="/requestservice" passHref>
                    <span>Request Service</span>
                </Link>
            </div>
        </div>
    )
}