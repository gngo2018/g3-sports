import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGlobalContext } from '../../context/MyGlobalContext'
import mobileMenuStyles from './mobile_menu.module.css'

export default function MobileMenu(){
    const { menuIsOpen, setMenuIsOpen } = useGlobalContext()

    const handleExitMenuIcon = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    return (
        <div className={mobileMenuStyles.mobile_menu_container}>
            <div className={mobileMenuStyles.mobile_menu_header_container}>
                <h2>Menu</h2>
                <FontAwesomeIcon icon="times-circle" onClick={() => handleExitMenuIcon()} className={mobileMenuStyles.icon}/>
            </div>
            <div className={mobileMenuStyles.mobile_menu_list_item_container}> 
                <span>Tennis Services</span>
                <Link href="/about" passHref>
                    <span onClick={() => handleExitMenuIcon()}>About</span>
                </Link>
                <Link href="/requestservice" passHref>
                    <span onClick={() => handleExitMenuIcon()}>Request Service</span>
                </Link>
            </div>
        </div>
    );
}