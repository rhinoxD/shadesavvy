import { generatePalette } from './colorHelpers';
import Palette from './Palette';
import seedColors from './seedColors';

function App() {
  console.log(generatePalette(seedColors[4]));
  return (
    <div className="App">
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
