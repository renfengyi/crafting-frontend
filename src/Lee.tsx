import React,{Component} from "react";
interface IProps{
    name:string
}
export default class Lee extends Component<IProps,any>{
    render(){
        return (
            <>
                <h1>
                    {this.props.name}
                </h1>
            </>
        );
    }
}