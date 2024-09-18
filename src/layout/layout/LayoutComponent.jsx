import React from "react"
import Layout from "antd/es/layout/layout"
import { Content } from "antd/es/layout/layout"
import { Header } from "../Header/Header"
import { TopBanner } from "../Header/TopBanner"
import { Divider } from "antd"
import { FeaturesPanel } from "../Header/FeaturesPanel"
import { Footer } from "../footer/Footer"


export const LayoutComponent = ({children}) => {
    return (
        <Layout className="min-h-screen flex flex-col">
            <TopBanner />
            <Divider className="m-0"/>
            <Header />
            <FeaturesPanel />
            <Content className="flex-grow">
                {children}
            </Content>
            <Divider className="m-0"/>
            <Footer/>
        </Layout>
    )
}



