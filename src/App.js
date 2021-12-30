import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBarComp from './components/Navbar';
import Category from './Pages/Category.jsx';
// import Popular from './components/Popular';
import SearchResult from './components/Search/SearchResult.jsx';
import Index from './Pages';
import "./css/index.css";
import SingleMovie from './Pages/SingleMovie';
import { searchMovies } from './apis';

const App = () => {
   const [search, setSearch] = useState(false);
   const [searchTerm, setSearchTerm] = useState('');
   const [page, setPage] = useState(1);
   const [searchResult, setSearchResult] = useState([]);

   const searchForMovies = () => {
      searchMovies(searchTerm, page)
         .then(results => {
            console.log(results);
            setSearchResult(results)
         });
   }

   useEffect(() => {
      if (searchTerm) {
         searchMovies(searchTerm, page).then(results => {
            console.log(results);
            setSearchResult(results)
         });
      }

   }, []);

   return (
      <Router>
         <header>
            <NavBarComp
               search={search}
               setSearch={setSearch}
               searchTerm={searchTerm}
               setSearchTerm={setSearchTerm}
               searchForMovies={searchForMovies}
            />
         </header>
         <main>
            <Switch>
               <Route exact path='/'  >
                  <Index page={page} />
               </Route>
               <Route exact path='/category/:category/:id' component={Category} />
               <Route exact path="/movie/:id" component={SingleMovie} />
               <Route exact path='/search/:query'
                  // component={SearchResult}
                  render={(props) =>
                     <SearchResult {...props}
                        page={page}
                        setPage={setPage}
                        searchResult={searchResult}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                     />}
               />
            </Switch>
         </main>
      </Router>
   );
}

export default App;