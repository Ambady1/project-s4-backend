import { messcutSer } from "../services/MessCutSer.js"

export const messcutCont = (req, res) => {
    const sid = req.body.sid;
    const start = req.body.start;
    const end = req.body.end;
    messcutSer(sid, 1, start, end)
        .then((result) => {
            if (result) {
                res.json(result)
            }
        })
        .catch((error) => {
            console.log(error)
        })
}