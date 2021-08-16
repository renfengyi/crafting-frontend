import { Component } from "react";

export default class BurnDesc extends Component<any,any>{
    render (){
        return (
            <div>
                <div className="card-down-right-up">
                    <p className="card-down-right-up-text1">Burn sUSD to unstake SNX</p>
                    <p className="card-down-right-up-text2">
                    Burn your sUSD debt to unlock your
                     staked SNX. This will increase your
                      Collateralization Ratio and reduce your
                       debt.<span>Learn more</span>
                    </p>
                </div>
                <div className="card-down-right-down">
                    <p className="card-down-right-down-card1">
                        <p>TOTAL</p>
                        <p>0.00 SNX</p>
                    </p>
                    <p className="card-down-right-down-card2">
                        <p className="card-down-right-down-card2-up">
                            <p>STAKED</p>
                            <p style={{color:'#fff'}}>0.00 SNX</p>
                        </p>
                        <p className="card-down-right-down-card2-middle">
                            <p>TRANSFERABLE</p>
                            <p style={{color:'#fff'}}>0.00 SNX</p>
                        </p>
                        <p className="card-down-right-down-card2-down">
                            <p>C-RATIO</p>
                            <p style={{color:'#fff'}}>0.00%</p>
                        </p>
                    </p>
                    <p className="card-down-right-down-card3">
                        <p>SUSD BALANCE</p>
                        <p style={{color:'#fff'}}>0.00</p>
                    </p>
                    <p className="card-down-right-down-card4">
                        <p>TOTAL DEBT</p>
                        <p style={{color:'#fff'}}>0.00 SUSD</p>
                    </p>
                </div>
            </div>
        );
    }
}