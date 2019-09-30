import express from 'express';
import  restaurantHandler from '../handlers/restaurant';

const restaurantRouter = express.Router();

restaurantRouter.get("/restaurant/:user_id", (req, res) => {
    const user_id = req.params.user_id;
    console.log(user_id);
    restaurantHandler.getRestaurant(user_id).then(result => {
        res.status(200).json(result)
    }).catch(err => {
        res.status(500).json(err)
    })
})

export default restaurantRouter;