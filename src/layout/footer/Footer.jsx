import { Divider } from "antd"
import { Link } from "react-router-dom"
import styled from './footer.module.css'

const headTextStyle = {
    fontSize: '20px',
    fontWeight: '700'
}

export const Footer = () => {
    return (
        <div className="px-3 md:px-10 max-w-7xl m-auto w-full">
            
            <div className="py-4 flex justify-between font items-start max-md:flex-col gap-3">
                <div className="grid gap-1">
                    <p style={headTextStyle}>Моя учетная запись</p>
                    <Link className={styled.linkTextStyle}>Войти</Link>
                    <Link className={styled.linkTextStyle}>Создать учетную запись</Link>
                </div>

                <div className="grid gap-1">
                    <p style={headTextStyle}>Информация</p>
                    <Link className={styled.linkTextStyle}>О нас</Link>
                    <Link className={styled.linkTextStyle}>Обратная связь</Link>
                    <Link className={styled.linkTextStyle}>Подарочные сертификаты</Link>
                    <Link className={styled.linkTextStyle}>Торговые марки</Link>
                    <Link className={styled.linkTextStyle}>Карта сайта</Link>
                    <Link className={styled.linkTextStyle}>Блог</Link>
                </div>

                <div className="grid gap-1">
                    <p style={headTextStyle}>Покупателю</p>
                    <Link className={styled.linkTextStyle}>Ваши заказы</Link>
                    <Link className={styled.linkTextStyle}>Отложенные</Link>
                    <Link className={styled.linkTextStyle}>Список сравнения</Link>
                </div>

                <div className="grid gap-1">
                    <p style={headTextStyle}>Контакты</p>
                    <p>г. Москва, ул. Флотская, д. 6/21, цокольный этаж</p>
                    <Link className={styled.linkTextStyle}>+7(495)369-21-42</Link>
                    <p>Пн-Пт 11.00 - 20.00</p>
                    <Link className={styled.linkTextStyle}>sales@onlinestore.su</Link>
                    <Link className={styled.linkTextStyle}>Посмотреть на карте</Link>
                </div>
            </div>
            <p>© 2016 - 2024 ONLINESTORE. Всегда высокое качество с</p>
        </div>
    )
}