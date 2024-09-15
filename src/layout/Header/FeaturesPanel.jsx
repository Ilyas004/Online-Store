import { Button, Input } from "antd"
import { LayoutGrid, User, ShoppingCart } from "lucide-react"

const { Search } = Input;


const onSearch = (value, _e, info) => console.log(info?.source, value);

export const FeaturesPanel = () => {
    return (
        <div className="px-3 md:px-10 bg-purple-200 flex items-center gap-2">
                <Button 
                    type="text"
                    className="text-base py-6" 
                    icon={<LayoutGrid />}
                >
                    Каталог товаров
                </Button>

                <Search
                    placeholder="Поиск товара"
                    onSearch={onSearch}
                />

                <Button icon={<User/>} className="text-sm px-2">Учетная запись</Button>
                <Button icon={<ShoppingCart />} className="text-sm px-2">Корзина</Button>
        </div>
    )
}