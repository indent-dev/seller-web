import { Button, Layout } from 'antd'
import React from 'react'
import { FormIklan } from './components/FormIklan/FormIklan'
import { ListIklan } from './components/ListIklan/ListIklan'

export const App = () => {
    const { Header, Footer, Sider, Content } = Layout;
    return (
        <div>
            <Layout>
                <Header>
                    Seller Web
                    <Button>Add Iklan</Button>
                    {/* <FormIklan /> */}
                </Header>
                <Content>
                    <ListIklan></ListIklan>
                </Content>
                <Footer>Powered by Indent Team</Footer>
            </Layout>
        </div>
    )
}
