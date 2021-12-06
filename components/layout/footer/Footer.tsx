import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import footerStyles from './footer.module.css'

export default function Footer(){
    return(
        <div className={footerStyles.footer_container}>
        <FontAwesomeIcon icon={['fab', 'facebook']} className={footerStyles.icon} />
        <FontAwesomeIcon icon={['fab', 'twitter']} className={footerStyles.icon}/>
        <FontAwesomeIcon icon={['fab', 'instagram']} className={footerStyles.icon}/>
    </div>
    )
}