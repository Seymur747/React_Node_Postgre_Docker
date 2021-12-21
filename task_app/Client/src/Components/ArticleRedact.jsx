import React from "react";
import {NavLink} from 'react-router-dom'


let ArticleRedact=(props)=>{
    return <>
    <form  onSubmit={props.update}>
    <div className="form-group">
      <label>Заголовок</label>
      <input className="form-control" onChange={props.ChangeHeading} value={props.article?props.article.heading:''} name='heading' />
    </div>
    <div className="form-group">
      <label>Контент</label>
      <textarea className="form-control" name='contetns' onChange={props.ChangeContent} value={props.article?props.article.contetns:''} rows="3"></textarea>
    </div>
    <button  className="btn btn-primary">Применить</button>
    <button className='btn btn-primary'><NavLink to='/articles'>Список</NavLink></button>
  </form>
  
  </>
}
export default ArticleRedact;