import { Button, Input } from "antd"
import { LayoutGrid, User, ShoppingCart } from "lucide-react"
import { Link, Routes, useNavigate, useNavigation, useRoutes } from "react-router-dom";

const { Search } = Input;


const onSearch = (value, _e, info) => console.log(info?.source, value);

export const FeaturesPanel = () => {
    const navigation = useNavigate()

    return (
        <div className="bg-purple-200 shadow">
            <div className="px-3 md:px-10 max-w-7xl m-auto w-full">
                <div className="flex items-center gap-2">
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

                        <Link to={'/login'}>
                            <Button icon={<User/>} className="text-sm px-2">Учетная запись</Button>
                        </Link>

                        <Button icon={<ShoppingCart />} className="text-sm px-2">Корзина</Button>
                </div>
            </div>
        </div>
    )
}