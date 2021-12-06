import { useGlobalContext } from '../../context/MyGlobalContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import mobileMenuStyles from './mobile_menu.module.css'

export default function MobileMenu(){
    const { menuIsOpen, setMenuIsOpen } = useGlobalContext()

    const handleExitMenuIcon = () => {
        setMenuIsOpen(!menuIsOpen);

        console.log(menuIsOpen)
    }

    return (
        <div className={mobileMenuStyles.mobile_menu_container}>
            <div className={mobileMenuStyles.mobile_menu_header_container}>
                <h2>Menu</h2>
                <FontAwesomeIcon icon="times-circle" onClick={() => handleExitMenuIcon()} className={mobileMenuStyles.icon}/>
            </div>
            <div className={mobileMenuStyles.mobile_menu_list_item_container}> 
                <span>Tennis Services</span>
                <span>About</span>
                <span>Contact</span>
            </div>
        </div>
    );
}