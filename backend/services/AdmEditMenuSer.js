import db from '../models/Database.js'

export const admEditMenuSer =()=>{
    return new Promise((resolve,reject)=>{
        const q = 'SELECT * FROM menu'
        db.query(q,(err,result)=>{
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    })

}