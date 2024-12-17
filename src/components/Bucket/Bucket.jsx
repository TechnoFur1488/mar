import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../routes/ProductKat/productSlice";
import s from "./Bucket.module.css";
import { decrementCountS, incrementCountS } from "../../routes/ProductKat/productSlice";

export const Bucket = () => {
    const products = useSelector((s) => s.product?.value || []);
    const dispatch = useDispatch();

    const TotalMoney = () => {
        let total = 0;
        products.forEach(product => {
            total += parseFloat(product.price.replace(/\D/g, '')) * product.count;
        });
        return total;
    };

    const TotalTov = () => {
        let total = 0;
        products.forEach(product => {
            total += product.count;
        });
        return total;
    };

    return (
        <div className={s.container} >
            <h1>Заказ</h1>
            {products.length === 0 ? (
                <span>Корзина пуста</span>
            ) : (
                products.map(product => (
                    <div className={s.sContainer} key={product.id}>
                        <div className={s.divTov}>
                            <div className={s.divBtnDel}>
                                <button className={s.btnDel} onClick={() => dispatch(remove(product.id))}>
                                    <img src="/images/Android_Emoji_274c_svg-no-bg-preview (carve.photos) 1.png" />
                                </button>
                            </div>
                            <div className={s.divText}>
                                <span className={s.spanName}>Очки {product.name}</span>
                                <span>{product.color}</span>
                            </div>
                            <img src={product.img} alt={product.name} />
                            <span className={s.spanPrice}>
                                {parseFloat(product.price.replace(/\D/g, '')) * product.count}₽
                            </span>
                            <div className={s.divPMBtn}>
                                <button

                                    onClick={() => dispatch(decrementCountS(product.id))}
                                    className={s.btnCount}>
                                    -
                                </button>
                                <span className={s.countSpan}>{product.count}</span>
                                <button
                                    onClick={() => dispatch(incrementCountS(product.id))}
                                    className={s.btnCount}>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
            <div className={s.flexDivTotal}>
                <div className={s.totalSpan}>
                    <span className={s.Mon}>Итог:</span>
                    <span className={s.Mon}>{TotalMoney()}₽</span>
                </div>
                <div className={s.totalSpan}>
                    <span className={s.Tov}>Товары:</span>
                    <span className={s.Tov}>{TotalTov()}</span>
                </div>
                <button className={s.btnBuy} onClick={() => {TotalMoney() === 0 ? alert("Надо что то купить )))") :alert("Вы заказали очки на сумму " + TotalMoney() + "₽")}}>ЗАКАЗАТЬ</button>
            </div>
        </div>
    );
};
