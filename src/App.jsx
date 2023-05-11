import './App.css';
import Card from './card/Card';

const App = () => {
  const data = [
    {
    commname: 'Сказочное заморское яство', 
    name: 'Нямушка',
    taste:'с фуа-гра', 
    portions:'10', 
    present: 'мышь в подарок', 
    weight: '0.5',
    description: 'Печень утки разварная с артишоками.',
    ended: false, 
    selected: false, 
    descrEnded: 'Печалька, с фуа-гра закончился.', 
    id: 1
  },
    {
    commname: 'Сказочное заморское яство',
    name: 'Нямушка', 
    taste:'с рыбой', 
    portions:'40', 
    present: '2 мыши в подарок', 
    weight: '2',
    description: 'Головы щучьи с чесноком да свежайшая сёмгушка', 
    ended: false, 
    selected: true, 
    descrEnded: 'Печалька, с рыбой закончился.', 
    id: 2
  },
    {
    commname: 'Сказочное заморское яство', 
    name: 'Нямушка', 
    taste:'с курой', 
    portions:'100', 
    present: '5 мышей в подарок', 
    weight: '5',
    description: 'Филе из цыплят с трюфелями в бульоне.' , 
    ended:true, 
    selected: false, 
    descrEnded: 'Печалька, с фуа-гра закончился.', 
    id: 3
  }]
  return (
    <div className="App">
      <div className='app_header'>
        <Card data = {data[0]}/>
        <Card data = {data[1]}/>
        <Card data = {data[2]}/>
      </div>
    </div>
  );
}

export default App;
