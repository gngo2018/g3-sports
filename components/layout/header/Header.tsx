import headerStyles from './header.module.css'

export default function Header(){
    return(
        <div className={headerStyles.header_container}>
            <h2>G3 Sports</h2>
            <div className={headerStyles.hamburger_menu}>
                <span className={headerStyles.hamburger_menu_line}></span>
                <span className={headerStyles.hamburger_menu_line}></span>
                <span className={headerStyles.hamburger_menu_line}></span>
            </div>
            <div className={headerStyles.header_list_item_container}>
                <span>Option 1</span>
                <span>Option 2</span>
                <span>Option 3</span>
            </div>
        </div>
    )
}