import {Component} from "react";

export default class Burn extends Component<any,any>{
    render(){
        return (
            <>
                <div className="tab-burn">
                    <div className="tab-burn-up">
                        <div className="tab-burn-max">
                            <p className="burn-max-p1">BURN MAX</p>
                            <p className="burn-max-p2">
                                Burn all available sUSD in your wallet (up to
                                your total debt) to unstake your SNX
                            </p>
                        </div>
                        <div className="tab-burn-to">
                            <p className="burn-to-p1">BURN TO 0.00%</p>
                            <p className="burn-to-p2">
                            Burn sUSD required to reach target C-Ratio
                            </p>
                        </div>
                    </div>
                    <div className="tab-burn-down">
                        <div className="tab-burn-custom">
                            <p className="burn-custom-p1">BURN CUSTOM</p>
                            <p className="burn-custom-p2">
                            Burn a custom amount of sUSD
                            </p>
                        </div>
                        <div className="tab-burn-clear-debt">
                            <p className="burn-clear-debt-p1">CLEAR DEBT</p>
                            <p className="burn-clear-debt-p2">
                            Buy and burn sUSD to clear your total debt and
                                unstake all SNX
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}