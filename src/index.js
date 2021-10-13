// Para renderizar en el HTML se utiliza ReactDOM
import reactDOM from "react-dom";

// Importando componente
// import PrimeraApp from "./PrimeraApp";
import CounterApp from './CounterApp';

//importar estilos
import './index.css';


const divRoot = document.querySelector('#root');

reactDOM.render(<CounterApp value = { 0 } />, divRoot);