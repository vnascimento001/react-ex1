import {Component} from 'react';

class Lista extends Component{

    constructor(props){
        super(props);
    }

    converte(v){
        return v.map( (d) => <li>{d}</li>);
    }

    render(){
        return (
            <ol>
                {this.converte(this.props.dados)}
            </ol>
        );
    }
}

export default Lista