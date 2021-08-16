import { Button, Input } from "antd";
import {ArrowLeftOutlined} from '@ant-design/icons';
import {Component} from "react";
import MintMax from './MintMax';

interface IState{
    maxcustom:number
}

export default class Mint extends Component<any,IState>{
    constructor(props:any,context:any){
        super(props,context);
        this.state={
            maxcustom:0
        }
    }
    componentDidMount(){
        this.setState(
            {maxcustom:0}
        )
    }
    render(){
        const onclickmax=(event: React.MouseEvent<HTMLElement>)=>{
            this.setState(
                {maxcustom:1}
            )
        }
        const onclickback=(event: React.MouseEvent<HTMLElement>)=>{
            this.setState(
                {maxcustom:0}
            )
        }
        const onclickcustom=(event: React.MouseEvent<HTMLElement>)=>{
            this.setState(
                {maxcustom:2}
            )
        }
        return (
            <>
                {this.state.maxcustom==0?
                    <div className="tab-mint">
                        <div className="tab-mint-max" onClick={onclickmax} key='1'>
                            <p className="mint-max-p1">MINT MAX</p>
                            <p className="mint-max-p2">Mint the maximum amount of sUSD</p>
                        </div>
                        <div className="tab-mint-custom" onClick={onclickcustom} key='2'>
                            <p className="mint-custom-p1">MINT CUSTOM</p>
                            <p className="mint-custom-p2">Mint a custom amount of sUSD</p>
                        </div>
                    </div>:this.state.maxcustom==1?<div className="tab-mint-max-page">
                        {/* Max Back Page */}
                        <div style={{backgroundColor:'#06061B',padding:'10px'}}>
                            <div className="tab-mint-max-page-up-0">
                                <div style={{width:'19px',height:'19px'}} onClick={onclickback}>
                                    <ArrowLeftOutlined  style={{fontSize:'large'}}/>
                                </div>
                            </div>
                            <div className="tab-mint-max-page-up">
                                <p>0.00 sUSD</p>
                            </div>
                            <div className="tab-mint-max-page-middle">
                            <Input style={{fontWeight:'bold'}} prefix="STAKING" suffix="0.0000 SNX" />
                            <br />
                            <br />
                            <Input style={{fontWeight:'bold'}} prefix="GAS PRICE (GWEI)" suffix="≈ 23 ($34.74) EDIT" />
                            </div>
                        </div>
                        <div className="tab-mint-max-page-down">
                        <Button style={{width:'100%',fontWeight:'bold',color:'black'}} type="primary">MINT sUSD</Button>
                        </div>
                    </div>:<div className="tab-mint-custom-page">
                        {/* Custom Back Page */}
                        <div style={{backgroundColor:'#06061B',padding:'10px'}}>
                            <div className="tab-mint-custom-page-up-0">
                                <div style={{width:'19px',height:'19px'}} onClick={onclickback}>
                                    <ArrowLeftOutlined  style={{fontSize:'large'}}/>
                                </div>
                            </div>
                            <div className="tab-mint-custom-page-up">
                                <p>0</p>
                            </div>
                            <div className="tab-mint-custom-page-middle">
                            <Input style={{fontWeight:'bold'}} prefix="STAKING" suffix="0.0000 SNX" />
                            <br />
                            <br />
                            <Input style={{fontWeight:'bold'}} prefix="GAS PRICE (GWEI)" suffix="≈ 25 ($37.76) EDIT" />
                            </div>
                        </div>
                        <div className="tab-mint-custom-page-down">
                        <Button style={{width:'100%',fontWeight:'bold',color:'black'}} type="primary">MINT sUSD</Button>
                        </div>
                    </div>}
            </>
        );
    }
}