import { createContext, useContext } from 'react'

export type GlobalContent = {
    menuIsOpen: boolean
    setMenuIsOpen: (m: boolean) => void
}

export const MyGlobalContext = createContext<GlobalContent>({
    menuIsOpen: false, // set a default value
    setMenuIsOpen: () => { },
});

export const useGlobalContext = () => useContext(MyGlobalContext);