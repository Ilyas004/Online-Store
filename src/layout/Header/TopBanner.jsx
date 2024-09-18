import { Button } from "antd"
import {EnvironmentTwoTone} from '@ant-design/icons';
import { Link } from "react-router-dom";

export const TopBanner = () => {
    return (
        <div className="px-3 md:px-10 max-w-7xl m-auto w-full">
            <div className="flex justify-between items-center">
                <Button className="rounded-sm" type="text" icon={<EnvironmentTwoTone />}>
                    <p className="text-blue-500">Махачкала</p>
                </Button>

                <div>
                    <nav>
                        <ul className="flex gap-3 text-gray-500">

                            <li>
                                <Link>Доставка и оплата</Link>
                            </li>
                            <li>
                                <Link>Поиск магазина</Link>
                            </li>
                            <li>
                                <Link>Контакты</Link>
                            </li>
                            <li>
                                <Link>Информация</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}