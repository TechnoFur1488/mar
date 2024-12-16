import { Link } from "react-router-dom"
import s from "./MainPage.module.css"

export const MainPage = () => {
    return (
        <section className={s.Back}>
            <div className={s.container}>
                <div className={s.textBtn}>
                    <h1>Всё для вашего комфорта и стиля!</h1>
                    <Link to={"Katalog"} className={s.btn}>БОЛЬШЕ</Link>
                </div>
            </div>
        </section>
    )
}