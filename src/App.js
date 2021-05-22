//import logo from './logo.svg';
import './App.css';
import {BemVindo, BemVindoPessoa} from './bv';
import Lista from './lista';
import Tabela from './tabela';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <BemVindo />

      <BemVindoPessoa nome="Vinicius"/>

      Lista ordenada
      <Lista dados={["Maria", "José", "Carlos","Ana"]} />

      Tabela
      <Tabela dados={[{id:1, nome: "Ana", tel:"3299-0101"},
                      {id:2, nome: "Ian", tel:"3299-0202"},
                      {id:3, nome: "Leo", tel:"3299-0303"} ]} />
      </header>
    </div>
  );
}

export default App;
