import express from "express";
import * as orderHandler from "../handlers/order"
const orderRouter = express.Router();

orderRouter.get("/restaurant/:restaurant_id", (req, res) => {
    const restaurant_id = req.params.restaurant_id
    orderHandler.getOrdersByRestaurant(restaurant_id).then(result => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(500).json({
            message: err.message
        })
    })
})
orderRouter.put("/update/:order_id", (req, res) => {
    const order_details = {
        id: req.params.order_id,
        status: req.body.status
    };
    orderHandler.updateOrder(order_details)
        .then(result => {
            res.status(200).json(result);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        })
});

orderRouter.get("/:order_id", (req, res) => {
    const order_id = req.params.order_id;
    orderHandler.getOrderDetails(order_id)
        .then(result => {
            res.status(200).json(result);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        })
});

orderRouter.get("/buyer/:user_id", (req, res) => {
    const user_id = req.params.user_id;
    orderHandler
        .getOrdersByCustomer(user_id)
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({
                message: err.message
            });
        });
});

orderRouter.post("/confirmOrder", (req, res) => {
    const order_details = req.body
    return orderHandler.createOrder(order_details).then(result => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(500).json({
            message: err.message
        })
    })
})



export default orderRouter;