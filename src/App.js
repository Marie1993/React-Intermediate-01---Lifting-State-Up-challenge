import React from 'react';
import Search from './components/Search';
import './App.css';

export default function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [users, setUsers] = React.useState([
    'kieran',
    'alan',
    'ryan',
    'nigel',
    'geraint',
    'garin',
  ]);

  const usersDisplay = users
    .filter((user) => user.includes(searchValue))
    .map((user) => <p>{user}</p>);

  return (
    <div className="App">
      <h1>Users List</h1>
      <h2>Search for your favourite user!</h2>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      {usersDisplay.length === 0 ? <p>Sorry no results ...</p> : usersDisplay}
    </div>
  );
}
