import db from "../models/Database.js"

export const studRegSer = (name, email, sid, hash, dob, phone) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO students(name,email,studentid,password,dob,phone)VALUES(?,?,?,?,?,?)',
            [name, email, sid, hash, dob, phone],
            (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
    })
}

