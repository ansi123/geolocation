const express = require('express')
const router = express.Router()
const Location = require('../models/alien')


// router.get('/', async(req,res) => {
//     try{
//            const aliens = await Alien.find()
//            res.json(aliens)
//     }catch(err){
//         res.send('Error ' + err)
//     }
// })

// router.get('/:id', async(req,res) => {
//     try{
//            const alien = await Alien.findById(req.params.id)
//            res.json(alien)
//     }catch(err){
//         res.send('Error ' + err)
//     }
// })


// router.post('/', async(req,res) => {
//     const alien = new Alien({
//         // name: req.body.name,
//         // tech: req.body.tech,
//         // sub: req.body.sub,
//         geolocation: req.body.geolocation
//     })

//     try{
//         const a1 =  await alien.save() 
//         res.json(a1)
//     }catch(err){
//         res.send('Error')
//     }
// })

router.get('/',function(req, res){
    console.log(typeof(req.query.lng));
    console.log(parseFloat(req.query.long));
    var lat=Number(req.query.lat);
    var long=Number(req.query.long);
    console.log(typeof(lat));
    // const loct=new Location
    Location.findOne({
         locationTest: { $near: { $geometry: { type: "Point", coordinates: [req.query.long*1, req.query.lat*1] }, $minDistance: 0, $maxDistance: 100000 } }
    })
    .then((result)=>{
        // console.log(res);
        res.send(result)})
        
    .catch(err=>res.send(err))
    
});

router.post('/',(req,res)=>{
    Location.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch((err)=>{
        res.send(err);
    });
})

// router.patch('/:id',async(req,res)=> {
//     try{
//         const alien = await Alien.findById(req.params.id) 
//         alien.sub = req.body.sub
//         const a1 = await alien.save()
//         res.json(a1)   
//     }catch(err){
//         res.send('Error')
//     }

// })

module.exports = router