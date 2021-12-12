import React from 'react';
import './App.css'
import { Route,Routes } from 'react-router-dom';
import OneArticleContainer from './Components/OneArticleContainer';
import Menu from './Components/Menu';
import ArticlesContainer from './Components/ArticlesContainer';
import ArticleRedactContainer from './Components/ArticleRedactContainer';
import NotFound from './Components/NotFound';




function App() {
  return (
    <div className="app">
      <Routes>   
      <Route path="/" element={<Menu/>} />
        <Route path="/Articles" element={<ArticlesContainer />} />
        <Route path="/Article/:id" element={ <OneArticleContainer/>}/>
        <Route path="/Article/:id/edit=true" element={ <ArticleRedactContainer/>}/>
        <Route path="*" element={ <NotFound/>}/>
      </Routes>
    </div>

  );
}

export default App;
