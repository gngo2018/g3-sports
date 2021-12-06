import { useGlobalContext } from '../../../context/MyGlobalContext'
import MobileMenu from '../../mobilemenu/MobileMenu'
import headerStyles from './header.module.css'

export default function Header(){
    const { menuIsOpen, setMenuIsOpen } = useGlobalContext()

    const handleHamburgerMenuOnClick = () => {
        setMenuIsOpen(!menuIsOpen);

        console.log(menuIsOpen)
    }

    return(
        <div className={headerStyles.header_container}>
            <h2>G3 Sports</h2>
            <div className={headerStyles.hamburger_menu} onClick={() => handleHamburgerMenuOnClick()}>
                <span className={headerStyles.hamburger_menu_line}></span>
                <span className={headerStyles.hamburger_menu_line}></span>
                <span className={headerStyles.hamburger_menu_line}></span>
            </div>
            <div className={headerStyles.header_list_item_container}>
                <span>Tennis Services</span>
                <span>About</span>
                <span>Contact</span>
            </div>
        </div>
    )
}