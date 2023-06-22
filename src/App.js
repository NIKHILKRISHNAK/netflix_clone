import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import'./App.css'
import RowPost from './Components/RowPost/RowPost';
import {original,action,comedy, horror, romance, documentaries} from './urls'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <br/>
      <RowPost url={original} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={romance} title='Romance' isSmall/>
      <RowPost url={documentaries} title='Documentaries' isSmall/>
    </div>
  );
}
export default App;