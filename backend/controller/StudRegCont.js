import db from '../models/Database.js';

const saltRounds = 10;

export const studReg = (req,res)=>{
    const name = req.body.name
    const email = req.body.email
    const sid = req.body.sid
    const pass = req.body.pass
    const dob = req.body.dob
    const phone = req.body.phone
    //bcrypt used for hashing password
    bcrypt.hash(pass, saltRounds, (err, hash) => {
        if (err) {
            console.log(err)
        }

        db.query('INSERT INTO students(name,email,studentid,password,dob,phone)VALUES(?,?,?,?,?,?)',
            [name, email, sid, hash, dob, phone],
            (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    res.json("Values Inserted")
                }
            })
    })
}