import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCatsFetch } from './catState';

import './App.css';

function App() {
  const cats = useSelector((state) => state.cats.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);
  console.log(cats);
  return (
    <div className="App">
      <h1>CAT SPECTIES GALLERY</h1>
      <p>Images of different specties of cats. Lots of cats for your viewing pleaseure</p>
      <hr />
      <div className="Gallery">
        {cats.map((cat) => {
          return (
            <div key={cat.id} className="row">
              <div className="column column-left">
                <img alt={cat.name} src={cat.image.url} width="200" height="200" />
              </div>
              <div className="column column-right">
                <h2>{cat.name}</h2>
                <h5>Temperament: {cat.temperament}</h5>
                <p>{cat.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button>View More CATS</button>
    </div>
  );
}

export default App;
