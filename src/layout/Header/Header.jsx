import { Button, Divider, Tooltip } from "antd"
import { Link } from "react-router-dom"
import { Heart, ChartNoAxesColumn } from "lucide-react"

export const Header = () => {
    return (
        <div className="flex justify-center px-10 py-5 items-center">
            <div className="flex-1">

            LOGO
            </div>
            
            <div className="flex flex-1 text-blue-500 items-center">
               <Link>О нас</Link>
                <Divider className="py-2" type="vertical"></Divider> 
               <Link>Отзывы</Link> 
               <Divider className="py-2" type="vertical"></Divider>
               <Link>Карта сайта</Link> 
            </div>

            <div className="flex gap-2 items-center">
                <Tooltip title={'Просмотреть список пожеланий'}>
                    <Heart className="text-gray-500 hover:text-blue-500 transition duration-300" size={25}/>
                </Tooltip>

                <Tooltip title={'Просмотреть список сравнения'}>
                    <ChartNoAxesColumn className="text-gray-500 hover:text-blue-500 transition duration-300" size={25}/>
                </Tooltip>

                <p className="text-base font-medium ml-3">+7(495)369-21-42</p>
            </div>
        </div>
    )
}