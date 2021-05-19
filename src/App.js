import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBarComp from './components/Navbar';
import Category from './Pages/Category.jsx';
import Popular from './components/Popular';
import SearchResult from './components/Search/SearchResult.jsx';
import Index from './Pages';
import "./css/index.css";
import SingleMovie from './Pages/SingleMovie';

const App = () => {
   const [search, setSearch] = useState(false);
   const [searchTerm, setSearchTerm] = useState('');
   return (
      <Router>
         <header><NavBarComp search={search} setSearch={setSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} /></header>
         <main>
            <Switch>
               <Route exact path='/' component={Index} />
               <Route exact path='/category/:category/:id' component={Category} />
               <Route exact path="/movie/:id" component={SingleMovie} />
               <Route exact path='/serach/:query' render={(props) => <SearchResult {...props} />} />
            </Switch>
         </main>
      </Router>
   )
}

export default App;