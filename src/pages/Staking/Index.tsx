import { Switch,Route } from "react-router-dom";
import {Component,useState} from "react";



import MintDesc from './MintDesc';
import BurnDesc from './BurnDesc';
import Mint from './Mint';
import Burn from './Burn';


import './Index.css';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

interface IState{
    mintburn:number
}

class Staking extends Component<any,IState>{
    constructor(props:any,context:any){
        super(props,context);
        this.state={
            mintburn:1
        }
    }
    onchange = (activeKey:any) => {
        this.setState({
            mintburn:activeKey
        })
        console.log(this.state.mintburn)
    }
    render(){
        return (
            <div>
                <div className="card-up">
                    <div className="card-up-content">
                        <p className="card-up-text1">STAKED VALUE</p>
                        <p className="card-up-text2">$0.00</p>
                    </div>
                    <div className="card-up-content">
                        <p className="card-up-text3">C-RATIO</p>
                        <p className="card-up-text4">-%</p>
                    </div>
                    <div className="card-up-content">
                        <p className="card-up-text5">ACTIVE DEBT</p>
                        <p className="card-up-text6">$0.00</p>
                    </div>
                </div>
                <div className="card-down">
                    <div style={{width:'60%'}}>
                        <div style={{width:'100%'}} className="card-container">
                            <Tabs centered onChange={this.onchange} type="card">
                                <TabPane tab="MINT" key="1">
                                    <Mint/>
                                </TabPane>
                                <TabPane tab="BURN" key="2">
                                    <Burn/>
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                    <div className="card-down-right">
                        {this.state.mintburn==1?<MintDesc/>:<BurnDesc/>}
                    </div>
                </div>
            </div>
        );
    }
}
export default Staking;