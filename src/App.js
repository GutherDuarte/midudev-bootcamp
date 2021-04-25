import './App.css';
import Mensaje from './Message'

const Description = () =>{
  return <h1>
    Esta es la app del bootcamp full stack de midudev
    </h1>
}

const App= () => {
  return (
    <div className="App">
      <Mensaje color ='red' message = 'Hola, Devs'/>
      <Mensaje color = 'green' message = 'Estamos trabajando en un curso de React'/>
      <Description />
    </div>
  );
}

export default App;
