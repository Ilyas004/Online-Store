import { Image } from "antd"
import { Star } from "lucide-react"
import {Divider} from "antd"

export const Product = () => {
    return (
        <div className="rounded-2xl overflow-hidden w-fit transition duration-300 hover:shadow-xl bg-white h-120 cursor-pointer ease-in-out hover:scale-105 active:scale-100 active:shadow-none">
                <Image width={300} height={230} className="object-contain" src="https://img.05.ru/resize/8Z6RGMIm65Yg8U75PPfaqcfIq5DYmeyfO8GzPC90Zsk//rs:fit:500:500:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDIyNTM3Mi82LmpwZw"/>
            <Divider className="my-0 py-0"/>
            <div className="px-4 py-4 grid gap-1 max-w-64 line-clamp-3">
                <p className="text-base ">Аккумулятор для Rombica myBook Eclipse</p>
                <div className="flex gap-1 items-center">
                    <Star size={20} className="text-yellow-500"/>
                    <p className="text-yellow-500">0.0</p>
                </div>
                <p className="text-green-600">В наличии</p>
                <p className="font-semibold text-xl">800.00₽</p>
            </div>
        </div>
    )
} 