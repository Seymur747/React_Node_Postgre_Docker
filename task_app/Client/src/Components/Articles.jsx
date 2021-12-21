import React from "react";
import {NavLink} from 'react-router-dom'

let Articles=(props)=>{
  let number=1;
    return (
        <div className="container">
            <table className="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">N</th>
                  <th scope="col">Id</th>
                  <th scope="col">Заголовок</th>
                  <th scope="col">Дата создания</th>
                  <th scope="col"><button className="btn btn-primary" onClick={props.sort}>Сортировать</button></th>
                </tr>
              </thead>
            <tbody>
{!props.list.datas?'':
    props.list.datas.map(data=>
        <tr key={data.id}>
          <th scope="row">{number++}</th>
          <th scope="row">{data.id}</th>
          <td>{<NavLink to={`/article/${data.id}`}>{data.heading}</NavLink>}</td>
          <td colSpan={2}>{data.created_at.split('T')[0]}<br/>{data.created_at.split('T')[1].split('Z')}</td>
        </tr>
      )}
  </tbody>
</table>
<button className="btn btn-primary" onClick={props.create}>Создать статью</button>
       </div>
    )
}
export default Articles;