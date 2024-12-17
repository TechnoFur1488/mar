import { useParams } from "react-router-dom";
import { add, incrementCount, decrementCount, changeColor } from "../../routes/ProductKat/productSlice";
import s from "./Product.module.css";
import { useDispatch, useSelector } from "react-redux";

const products = [
  {
    id: 1,
    name: "Doels Gun",
    img: "/images/очкии5.png",
    price: "25 000₽",
    info: "описание товара",
    count: 1,
    color: "черный",
    char: "Doels Gun",
    char2: "Оправа-металл; Линзы-нейлон;",
    char3: "Италия",
    char4: "Италия",
    char5: "00077858",
    char6: "Ширина линзы 59 мм, ширина переносицы 15 мм, длина дужки 145 мм, расстояние от дужки до дужки 140 мм, высота линзы с учетом оправы 55 мм."
  },
  {
    id: 2,
    name: "Dead Dynasty",
    img: "/images/i (2) 3.png",
    price: "26 590₽",
    count: 1,
    color: "черный",
    info: "При создании авиаторов команда марки подружила серебристый и золотистый металлы с черным глянцевым ацетатом. Аксессуар с двойным мостом дополнили дымчатыми линзами из устойчивого к царапинам нейлона, на 100% блокирующими вредные УФ-лучи. Вставку с гравировкой грогрен на узких дужках украсили рельефной монограммой DG",
    char: "Dead Dynasty",
    char2: "Оправа-металл; Линзы-нейлон;",
    char3: "Италия",
    char4: "Италия",
    char5: "00077858",
    char6: "Ширина линзы 59 мм, ширина переносицы 15 мм, длина дужки 145 мм, расстояние от дужки до дужки 140 мм, высота линзы с учетом оправы 55 мм."
  },
  {
    id: 3,
    name: "Almond Goggles",
    img: "/images/png-transparent-sunglasses-almond-goggles-dolce-ga-no-bg-preview (carve.photos) 2.png",
    price: "20 000₽",
    count: 1,
    color: "черный",
    info: "описание товара",
    char: "Almond Goggles",
    char2: "Оправа-металл; Линзы-нейлон;",
    char3: "Италия",
    char4: "Италия",
    char5: "00077858",
    char6: "Ширина линзы 59 мм, ширина переносицы 15 мм, длина дужки 145 мм, расстояние от дужки до дужки 140 мм, высота линзы с учетом оправы 55 мм."
  },
  {
    id: 4,
    name: "Boot banna",
    img: "/images/очкии5.png",
    price: "22 000₽",
    count: 1,
    color: "черный",
    info: "описание товара",
    char: "Boot banna",
    char2: "Оправа-металл; Линзы-нейлон;",
    char3: "Италия",
    char4: "Италия",
    char5: "00077858",
    char6: "Ширина линзы 59 мм, ширина переносицы 15 мм, длина дужки 145 мм, расстояние от дужки до дужки 140 мм, высота линзы с учетом оправы 55 мм."
  },
  {
    id: 5,
    name: "Tigger sun",
    img: "/images/png-clipart-sunglasses-eyewear-goggles-dolce-gabba-no-bg-preview (carve.photos) 2.png",
    price: "22 590₽",
    info: "описание товара",
    count: 1,
    color: "черный",
    char: "Tigger sun",
    char2: "Оправа-металл; Линзы-нейлон;",
    char3: "Италия",
    char4: "Италия",
    char5: "00077858",
    char6: "Ширина линзы 59 мм, ширина переносицы 15 мм, длина дужки 145 мм, расстояние от дужки до дужки 140 мм, высота линзы с учетом оправы 55 мм."
  },
  {
    id: 6,
    name: "Dead Dynasty",
    img: "/images/PGIA77 2s.png",
    price: "15 000₽",
    info: "описание товара",
    count: 1,
    color: "черный",
    char: "Dead Dynasty",
    char2: "Оправа-металл; Линзы-нейлон;",
    char3: "Италия",
    char4: "Италия",
    char5: "00077858",
    char6: "Ширина линзы 59 мм, ширина переносицы 15 мм, длина дужки 145 мм, расстояние от дужки до дужки 140 мм, высота линзы с учетом оправы 55 мм."
  },
  {
    id: 7,
    name: "Giga",
    img: "/images/8434efc9a 1.png",
    price: "25 000₽",
    info: "описание товара",
    count: 1,
    color: "черный",
    char: "Dead Dynasty",
    char2: "Оправа-металл; Линзы-нейлон;",
    char3: "Италия",
    char4: "Италия",
    char5: "00077858",
    char6: "Ширина линзы 59 мм, ширина переносицы 15 мм, длина дужки 145 мм, расстояние от дужки до дужки 140 мм, высота линзы с учетом оправы 55 мм."
  },
  {
    id: 8,
    name: "Polar model",
    img: '/images/PGIA77 2.png',
    price: "10 000₽",
    info: "описание товара",
    count: 1,
    color: "черный",
    char: "Dead Dynasty",
    char2: "Оправа-металл; Линзы-нейлон;",
    char3: "Италия",
    char4: "Италия",
    char5: "00077858",
    char6: "Ширина линзы 59 мм, ширина переносицы 15 мм, длина дужки 145 мм, расстояние от дужки до дужки 140 мм, высота линзы с учетом оправы 55 мм."
  },
  {
    id: 9,
    name: "Ray Bay",
    img: '/images/i (3) 1.png',
    price: "25 000₽",
    info: "описание товара",
    count: 1,
    color: "черный",
    char: "Dead Dynasty",
    char2: "Оправа-металл; Линзы-нейлон;",
    char3: "Италия",
    char4: "Италия",
    char5: "00077858",
    char6: "Ширина линзы 59 мм, ширина переносицы 15 мм, длина дужки 145 мм, расстояние от дужки до дужки 140 мм, высота линзы с учетом оправы 55 мм."
},
]


export const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Загружаем данные из store
  const { count, color } = useSelector(state => state.product);

  const product = products.find(prod => prod.id === +id);

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  const basePrice = parseInt(product.price.replace(/\D/g, ''), 10);

  const handleBuy = () => {
    dispatch(add({
      name: product.name,
      img: product.img,
      price: `${basePrice * count}₽`,
      count,
      color
    }));
    alert("Товар добавлен в корзину");
  };

  return (
    <>
      <section className={s.fSection}>
        <div className={s.container}>
          <div className={s.colorDiv}>
            <h2>Очки <br /> {product.name}</h2>
            <span>{color}</span>
          </div>
          <div className={s.divProductColor}>
            <img src={product.img} alt={product.name} />
            <div className={s.priceDiv}>
              <span>{`${basePrice * count}₽`}</span>
            </div>
            <div className={s.divPMBtn}>
              <button onClick={() => dispatch(decrementCount())} className={s.btnCount}>-</button>
              <span className={s.countSpan}>{count}</span>
              <button onClick={() => dispatch(incrementCount())} className={s.btnCount}>+</button>
            </div>
          </div>
          <div className={s.flexText}>
            <h3>Описание</h3>
            <p>{product.info}</p>
          </div>
        </div>
      </section>
      <section className={s.sSection}>
        <div className={s.constinerS}>
          <div className={s.textNote}>
            <h3>Характеристики</h3>
            <ul>
              <li>Бренд: {product.char}</li>
              <li>Состав: {product.char2}</li>
              <li>Страна дизайна: {product.char3}</li>
              <li>Страна производства: {product.char4}</li>
              <li>Артикул: {product.char5}</li>
              <li>Параметры изделия для размера 59: {product.char6}</li>
            </ul>
          </div>
          <div className={s.flexDiv}>
            <div className={s.textBtnColor}>
              <div className={s.matImg}>
                <div className={s.spanText}>
                  <span>МАТЕРИАЛ</span><br />
                  <span className={s.acText}>ацетат</span>
                </div>
                <img src="/images/image.png" alt="Материал" />
              </div>
              <div className={s.btnSpan}>
                <span>Цвета</span>
                <div className={s.mainDivBtn}>
                  <button onClick={() => dispatch(changeColor("бежевый"))} className={s.colorBtn}></button>
                  <button onClick={() => dispatch(changeColor("белый"))} className={s.colorBtnS}></button>
                  <button onClick={() => dispatch(changeColor("черный"))} className={s.colorBtnT}></button>
                </div>
              </div>
            </div>
            <button onClick={handleBuy} className={s.btnBuy}>КУПИТЬ</button>
          </div>
        </div>
      </section>
    </>
  );
};
