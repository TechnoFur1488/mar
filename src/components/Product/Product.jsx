import { useParams } from "react-router-dom"

const products = [
    {
        id: 1,
        name: "Dead Dynasty",
        img: "/images/i (2) 3.png",
        price: "22 000₽",
        info: "При создании авиаторов команда марки подружила серебристый и золотистый металлы с черным глянцевым ацетатом. Аксессуар с двойным мостом дополнили дымчатыми линзами из устойчивого к царапинам нейлона, на 100% блокирующими вредные УФ-лучи. Вставку с гравировкой грогрен на узких дужках украсили рельефной монограммой DG"
    },
    {
        id: 2,
        image: "/images/i (7)-edited-free (carve.photos) 1.png",
        name: "Наклейка “Монстр”",
        price: "100₽",
        info: "Яркая наклейка с изображением монстра.",
    },
]


export const Product = () => {


    const { id } = useParams()

    const product = products.find(prod => prod.id === +id)

    if (!product) {
        return <div>Продукт не найден</div>;
    }


    return (
        <div>
            
               <div>
                    <span>{product.info}</span>
                </div>
        
        </div>
    )
}