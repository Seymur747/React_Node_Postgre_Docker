import React,{useState ,useEffect} from "react";
import Articles from "./Articles";
import Api from "./API/Api";


let  ArticlesContainer=()=>{

    const [articles,change]=useState([])

      let Create=()=>{
       Api.create().then(data=> window.location.replace(`http://localhost:3000/article/${data.data[0]}/edit=true`));
      } 

    let Sort=()=>{
        let copy={datas:[...articles.datas].sort(()=>-1)}
        copy.order=false;
        change(copy)
    }

    useEffect(() => {    
    Api.getAll().then(data=>{
        change({datas:data.data,order:true})
    })
    },{});

    return <Articles create={Create}  sort={Sort} list={articles}/> 
}
export default ArticlesContainer;