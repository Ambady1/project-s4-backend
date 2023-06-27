import db from '../models/Database.js'

 async function calculateAndUpdate(){
        let studentid = {};
        const q1 = "SELECT studentid FROM students";
        db.query(q1,(error,results)=>{
            if(error){
                throw error
            }else{
                results.forEach(row => {
                     studentid = row;
                });
                console.log(results)
            }
        })
    }
       
  export default calculateAndUpdate