import React,{useState,useEffect} from "react";
import Api from "./API/Api";
import { useParams} from 'react-router-dom';
import ArticleRedact from "./ArticleRedact";


let ArticleRedactContainer=()=>{
    const { id } = useParams();
    const[article,change]=useState({})
    useEffect(() => {
        Api.getOne(id).then(data=>{
             change({heading:data.data[0].heading,contetns:data.data[0].contetns})
            }) 
    },[]);

    window.article=article;

    let ChangeHeading=(e)=>{
        let value=e.target.value;
        let copy={...article};
        copy.heading=value;
        change(copy)
    }
    let ChangeContent=(e)=>{
        let value=e.target.value;
        let copy={...article};
        copy.contetns=value;
        change(copy)
    }

    let Update=(e)=>{
        e.preventDefault();
        let heading=e.target.heading.value;
        let contetns=e.target.contetns.value;
        Api.edit(id,heading,contetns)
        window.location.replace("http://localhost:3000/articles/");
    }
   
    return <ArticleRedact ChangeHeading={ChangeHeading} ChangeContent={ChangeContent} article={article} update={Update}/>
}
export default ArticleRedactContainer;