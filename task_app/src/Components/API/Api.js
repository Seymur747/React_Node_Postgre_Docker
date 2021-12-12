import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3001/article/',
  });

    let ApiObj={

        getAll: async ()=>{
            
            return  axios.get('http://localhost:3001/articles')
           
        },
        getOne:(id)=>{ 
              
            return  instance.get(`${id}`)
        },
        create:(heading,contetns)=>{
            return  instance.post(``,{heading:heading,contetns:contetns})
        },
        delete:(id)=>{
            return  instance.delete(`${id}`)
        },
        edit:(id,heading,contetns)=>{
            return  instance.put(`${id}`,{heading:heading,contetns:contetns})
        }
    }
    
    export default ApiObj;