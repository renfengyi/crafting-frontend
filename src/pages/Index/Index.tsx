import React,{Component} from "react";

import {Layout} from 'antd';

import './Index.css';

import AsideMenu from '../../components/asideMenu/Index';

import ContainerMain from '../../components/containerMain/Index';

const {Sider,Header,Content} = Layout;

export default class Index extends Component<any,any>{
    render(){
        return (
            <Layout className="layout-wrap">
                <Sider width="200px"><AsideMenu/></Sider>
                <Layout>
                    <Header className="layout-header"></Header>
                    <Content className="layout-content">
                        <ContainerMain/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}