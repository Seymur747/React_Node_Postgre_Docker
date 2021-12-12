import React from "react";
import OneArticle from "./OneArticle";
import {NavLink} from 'react-router-dom'

let Articles=(props)=>{
  let number=1;
  console.log()
    return (
        <div className="container">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">N</th>
                  <th scope="col"></th>
                  <th scope="col">Заголовок</th>
                  <th scope="col">Дата создания</th>
                  <th scope="col"><button onClick={props.sort}>sort</button></th>
                </tr>
              </thead>
            <tbody>
    {!props.list.datas?'':props.list.datas.map(data=>
        <tr>
          <th scope="row">{number++}</th>
          <th scope="row">{data.id}</th>
          <td>{<NavLink to={`/article/${data.id}`}>{data.heading}</NavLink>}</td>
          <td>{data.created_at}</td>
        </tr>
      )}
  </tbody>
</table>
<button className="btn btn-primary" onClick={props.create}>Создать статью</button>
       </div>
    )
}
export default Articles;