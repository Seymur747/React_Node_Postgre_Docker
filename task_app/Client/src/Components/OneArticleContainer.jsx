import React,{useEffect,useState} from "react";
import OneArticle from "./OneArticle";
import { useParams} from 'react-router-dom';
import Api from './API/Api'

let OneArticleContainer=()=>{


    const { id } = useParams();
    const[article,change]=useState([])


    useEffect(() => {
        let isMounted = true; 
        Api.getOne(id).then(data=>{if(isMounted) change(data.data)})
        return () => { isMounted = false }; 
        },[]);

    let DeleteArticle= (e)=>{

        let id=e.target.id;

         Api.delete(id)

        window.location.replace("http://localhost:3000/articles/");
        
    }


    return <OneArticle delete={DeleteArticle}  article={article}/>
}


export default OneArticleContainer