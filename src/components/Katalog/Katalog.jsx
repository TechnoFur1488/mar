import s from "./Katalog.module.css"
import { SwiperKatalog } from "./SwiperKatalog"
import { Link } from "react-router-dom"

const products = [
    {
        id: 1,
        img: "/images/очкии5.png",
        name: "Doels Gun",
        price: "25 000₽"
    },
    {
        id: 2,
        img: "/images/i (2) 3.png",
        name: "Dead Dynasty",
        price: "26 590₽"
    },
    {
        id: 3,
        img: "/images/png-transparent-sunglasses-almond-goggles-dolce-ga-no-bg-preview (carve.photos) 2.png",
        name: "Almond Goggles",
        price: "20 000₽"
    },
    {
        id: 4,
        img: "/images/очкии5.png",
        name: "Boot banna",
        price: "22 000₽"
    },
    {
        id: 5,
        img: "/images/png-clipart-sunglasses-eyewear-goggles-dolce-gabba-no-bg-preview (carve.photos) 2.png",
        name: "Tigger sun",
        price: "22 590₽"
    },
    {
        id: 6,
        img: "/images/PGIA77 2s.png",
        name: "Polar model_3",
        price: "15 000₽"
    }
]

export const Katalog = () => {
    return (
        <>
            <section className={s.color}>
                <div className={s.container}>
                    <SwiperKatalog />
                </div>
            </section>
            <section className={s.divLine}></section>
            <section className={s.botColor}>
                <div className={s.container}>
                    <div className={s.flex}>
                        {products.map(product => {
                            return <Link to={`/Katalog/${product.id}`} className={s.priLink} key={product.id}>
                                <div>
                                    <label className={s.label}><input type="checkbox" /><span></span></label>
                                </div>
                                <div>
                                    <img src={product.img} alt="" />
                                </div>
                                <div>
                                    <span>{product.name}</span>
                                    <span>{product.price}</span>
                                </div>
                            </Link>
                        })}
                    </div>
                </div>

            </section>
        </>
    )
}