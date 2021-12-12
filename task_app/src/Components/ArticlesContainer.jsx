import React,{useState ,useEffect} from "react";
import Articles from "./Articles";
import Api from "./API/Api";


let  ArticlesContainer=()=>{

    const [articles,change]=useState([])

    function Compare( a, b ) {
       
        // if ( a.id < b.id ){
        //     console.log('f')
        //   return -1;
        // }
        // else{
        //     return -1
        // }
        return -1;
        // if ( a.id > b.id ){
        //     console.log('s')
        //   return 1;
        // }
        // return 0;
      }
      
      let Create=()=>{
       
       Api.create().then(data=> window.location.replace(`http://localhost:3000/article/${data.data[0]}/edit=true`));
 
      }
      
    let Sort=()=>{
   
        let copy={datas:[...articles.datas].sort(Compare)}
        copy.order=false;
        change(copy)
    }
    useEffect(() => {
      
    Api.getAll().then(data=>{
        
        change({datas:data.data,order:true})
    })
    },{});

    window.articles=articles

        return <Articles create={Create}  sort={Sort} list={articles}/>
    
}
export default ArticlesContainer;