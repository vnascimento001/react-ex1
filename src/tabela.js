import {Component} from 'react';

class Tabela extends Component{

    constructor(props){
        super(props);
    }

    converte(v){
        return v.map( (d) => <tr>{d}</tr>);
    }

    render(){
        return (
            <table>
                {this.props.dados.map( (d) => 
                <tr>
                    <td key={d.id.toString()}>Nome: {d.nome}</td>
                    <td>, Telefone: {d.tel}</td>
                </tr>)}
            </table>
        );
    }
}


export default Tabela