import React from 'react';
import classNames from 'classnames';
// import logo from './logo.svg';
import './App.css';

import {TAGS} from './data';
import {getSortedTags} from './utils';

// function MainContent() {
//   return (
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo"/>
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   );
// }

function Tags() {
  const sortedTags = getSortedTags(TAGS);
  const tagsList = sortedTags.map((tag, i) => {
    const {phrase, category, name} = tag;
    const key = `key_${i}`;
    const tagClassNames = classNames('tag', category, name);

    return <div className={tagClassNames} key={key}>{phrase}</div>;
  });

  return (
    <div className="tags-root">
      {tagsList}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Tags/>
    </div>
  );
}

export default App;
