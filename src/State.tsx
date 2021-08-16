import React,{Component} from "react";

interface IState{
    counter:number
}

export default class State extends Component<any,IState>{
    constructor(props:any,context:any){
        super(props,context);
        this.state={
            counter:0
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                counter:this.state.counter+1
            })
        },100)
    }
    render(){
        return (
            <>
                <h1>{this.state.counter}</h1>
            </>
        );
    }
}