import db from '../models/Database.js';

export const messcutSer =(sid, cut, start, end)=>{
    return new Promise((resolve,reject)=>{
        const q = "INSERT INTO messcut(studentid,messcut,cut_startdate,cut_enddate) VALUES (?,?,?,?)";
        db.query(q,[sid,cut,start,end],(error,result)=>{
            if(error){
                reject(error);
            }else{
                resolve("Values inserted")
            }
        })
    })
}