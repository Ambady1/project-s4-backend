import { studRegSer } from "../services/studRegSer.js";
import bcrypt from 'bcrypt'
const saltRounds = 10;

export const studReg = (req, res) => {
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
        studRegSer(name, email, sid, hash, dob, phone).then((result) => {
            res.json("Values Inserted")
        }).catch((err) => {
            console.log(err)
        })

    })
}