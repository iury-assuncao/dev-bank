import { createContext, useState } from "react";

export const MenuContext = createContext({})

const MenuProvider = ({ children }) => {

    const [linkSelected, setLinkSelected] = useState("extrato")

    const changeSelectedLink = () => {
        const linkContainer = document.querySelectorAll(".menu__link")

        // Remove classe 'selecionada'
        linkContainer.forEach((item) => {
            item.classList.remove("menu__link--selected")
        })
        
        const currentPage = document.getElementById(linkSelected)

        currentPage.classList.add("menu__link--selected")
    }

    return (
        <MenuContext.Provider value={{linkSelected, changeSelectedLink, setLinkSelected}}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuProvider