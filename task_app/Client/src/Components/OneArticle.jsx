import React from "react";
import { NavLink } from "react-router-dom";

 let OneArticle=(props)=>{
     return <>
      <table className="table table-hover table-dark">
     <thead>
       <tr>
         <th scope="col">id</th>
         <th scope="col">Заголовок</th>
         <th scope="col">Дата создания</th>
         <th scope="col">Дата редактирования</th>
         <th scope="col">Контент</th>
         <th scope="col">Действие</th>
       </tr>
     </thead>
     <tbody>
     {props.article.map(article=>
           <tr key={article.id}>
            <th scope="row">{article.id}</th>
            <td>{article.heading}</td>
            <td>{article.created_at}</td>
            <td>{article.updated_at}</td>
            <td>{article.contetns}</td>
            <td><button style={{marginRight:10+'px'}}  id={article.id} onClick={props.delete} className="btn btn-danger">Удалить</button><button id={article.id} onClick={props.update} className="btn btn-warning"><NavLink to={`/article/${article.id}/edit=true`}>Редактировать</NavLink></button></td>
         </tr>
     )}
     </tbody>
   </table>
    <button className='btn btn-primary'><NavLink to='/articles'>Список</NavLink></button>
    </>
 }

 export default OneArticle;