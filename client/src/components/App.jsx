import React from 'react';

const App = () => (
  <div>
    <h1>Fullstack Pokedex!</h1>
    <button>Show All</button>
    <select id="types">
      <option>Sort by Type</option>
      <option>Grass</option>
      <option>Fire</option>
      <option>Water</option>
    </select>
    <div>
      <h3>Bulbasaur</h3>
      <img src="http://vignette4.wikia.nocookie.net/nintendo/images/4/43/Bulbasaur.png/revision/latest?cb=20141002083518&path-prefix=en" />
    </div>
    <div>
      <h3>Ivysaur</h3>
      <img src="http://vignette3.wikia.nocookie.net/nintendo/images/8/86/Ivysaur.png/revision/latest?cb=20141002083450&path-prefix=en" />
    </div>
    <div>
      <h3>Venusaur</h3>
      <img src="http://vignette2.wikia.nocookie.net/nintendo/images/b/be/Venusaur.png/revision/latest?cb=20141002083423&path-prefix=en" />
    </div>
  </div>
)

export default App;