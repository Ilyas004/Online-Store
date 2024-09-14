import React from "react"
import { Header, Content, Footer, Layout } from "antd/es/layout/layout"


export const Layout = ({children}) => {
    return (
        <Layout>
            <Header>

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



