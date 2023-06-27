import messBillSer from '../services/messBillSer.js'
 async function calculateAndUpdate(req,res){
    try{
      await messBillSer();
      res.status(200).json({message : "Bills calculated and updated successfully"})
    }catch(error){
      res.status(500).json({error : "Internal server error"});
    }
  }
   /* .then((results) => {
      const result1 = results[0];
      const result2 = results[1];
        console.log(result1)
        console.log(result2.messcut)
      let messcuts = 0;

      for (let i = 0; i < result.length; i++) {
        messcuts += result[i].messcut;
      }

      res.json({ count: messcuts });
    })
    .catch((err) => {
      res.json(err);
    });*/

   export default calculateAndUpdate