import { useState } from "react";
import CarrinhoNew from "./Carrinho/CarrinhoNew";
import { Cabecalho } from "./HeaderStyled";
import { Logo } from "./Logo/Logo";
import MenuHamburguer from "./MenuHamburguer/MenuHamburguer";


export const Header = ({cart, setCart, setPagina}) => {

    return (
        <>
            <Cabecalho >
                <MenuHamburguer
                setPagina={setPagina}
                />

                <Logo/>

                <CarrinhoNew 
                cart = {cart}
                setCart = {setCart}
                />
            </Cabecalho>
        </>
    )
}

export default Header;