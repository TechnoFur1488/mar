import { Outlet, NavLink } from "react-router-dom";
import s from "./Root.module.css"

export const Root = () => {
    return (
        <>
            <nav>
                <NavLink to={"katalog"}>Каталог</NavLink>
                <NavLink to={"bucket"}>Корзина</NavLink>
            </nav>
            <Outlet />
        </>
    )

}