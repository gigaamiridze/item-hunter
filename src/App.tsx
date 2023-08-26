import { useSelector } from 'react-redux';
import { selectPlayerState } from './features';
import { PixiGame } from './components';

function App() {
  const { score } = useSelector(selectPlayerState);

  return (
    <div className='App'>
      <p className='game-description'>Click on saturn and collect items. Your score: {score}</p>
      <PixiGame />
    </div>
  )
}

export default App;
