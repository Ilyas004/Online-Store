import React from "react"
import Layout from "antd/es/layout/layout"
import { Header, Footer, Content } from "antd/es/layout/layout"
import { HeaderContent } from "../Header/HeaderContent"


export const LayoutComponent = ({children}) => {
    return (
        <Layout>
            <Header>
                <HeaderContent />
            </Header>
            <Content>
                {children}
            </Content>
            <Footer>
                dsad
            </Footer>
        </Layout>
    )
}



