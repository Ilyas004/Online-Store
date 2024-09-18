
import { Block } from "../../shared/ui/Block"
import { ListProduct } from "../../widgets/list_product/ui/ListProduct"

export const MainPage = () => {

    return (
        <Block className={'my-4'}>
            <ListProduct headText={'Популярные товары'}/>
        </Block>
    )
}

