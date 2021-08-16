import React,{Component, Fragment} from "react";

import {UserOutlined} from '@ant-design/icons'

import {Menu} from 'antd';

import IRouter from '../../router/index';

import { Link } from "react-router-dom";

const {SubMenu} = Menu;

export default class AsideMenu extends Component<any,any>{

    renderSubMenu=(data:any)=>{
        return (
            <SubMenu key={data.key} icon={<UserOutlined/>} title={data.title}>
                {
                    data.child && data.child.map((item:any)=>{
                        return item.child && item.child.length>0?this.renderSubMenu(item):this.renderMenu(item);
                    })
                }
            </SubMenu>
        );
    }

    renderMenu=(data:any)=>{
        return <Menu.Item key={data.key}>
            <Link to={data.key}><span>{data.title}</span></Link>
        </Menu.Item>;
    }

    render(){
        return (
            <Fragment>
                <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{backgroundColor:'#00203d',height:'100%',paddingTop:'40px',borderRight:0}}
                >
                    {
                        IRouter && IRouter.map(firstItem=>{
                            return firstItem.child && firstItem.child.length>0?this.renderSubMenu(firstItem):this.renderMenu(firstItem);
                        })
                    }
                </Menu>
            </Fragment>
        );
    }
} 