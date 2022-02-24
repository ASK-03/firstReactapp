import './App.css';
import Card from './Card';
import data from './data';

function App() {
  const cards = data.map(item => {
    return (
      <Card
          key = {item.id}
          item = {item}
      />
    )
  })
  return (
    <div className="container">
      <nav className="navBar"><h1>My Travel Journal</h1></nav>
      {cards}
    </div>
  );
}

export default App;
