import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3001/article/',
  });

    let ApiObj={

        getAll: async ()=>{
            
            return  axios.get('http://localhost:3001/articles')
           
        },
        getOne:(id)=>{ 
              
            return  axios.get(`http://localhost:3001/article/${id}`)
        },
        create:(heading,contetns)=>{
            return  axios.post(`http://localhost:3001/article/`,{heading:heading,contetns:contetns})
        },
        delete:(id)=>{
            return  axios.delete(`http://localhost:3001/article/${id}`)
        },
        edit:(id,heading,contetns)=>{
            return  axios.put(`http://localhost:3001/article/${id}`,{heading:heading,contetns:contetns})
        }
    }
    
    export default ApiObj;