import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from '@material-ui/lab/TabPanel';
import moment from "moment";

import { createSelector } from "@reduxjs/toolkit";
import { retrieveFinishedOrders } from "../../screens/OrdersPage/selector";
import { useSelector } from "react-redux";
import { serviceApi } from "../../../lib/config";
import { Product } from "../../../types/product";

const finishedOrdersRetriever = createSelector(
    retrieveFinishedOrders,
    (finishedOrders) => ({
        finishedOrders
    })
);



export default function FinishedOrders(props: any) {
    const { finishedOrders } = useSelector(finishedOrdersRetriever);

    return (
        <TabPanel value="3">
            <Stack>
                {finishedOrders.map((order) => {
                    return (
                        <Box className="order_main_box">
                            <Box className="order_box_scroll">
                                {order.order_items.map((item) => {
                                    const product: Product = order.product_data.filter((ele: { _id: any; }) => ele._id === item.product_id)[0];
                                    const image_path = `${serviceApi}/${product.product_images[0]}`
                                    return (
                                        <Box className="ordersName_price">
                                            <img className="orderDishImg" src={image_path} alt="" />
                                            <p className="titleDish">Stake</p>
                                            <Box className="priceBox">
                                                <p>${item.item_price}</p>
                                                <img src="/icons/Close.svg" alt="" />
                                                <p>{item.item_quantity}</p>
                                                <img src="/icons/Pause.svg" alt="" />
                                                <p style={{ marginLeft: "15px" }}>${item.item_price * item.item_quantity}</p>
                                            </Box>
                                        </Box>
                                    )
                                })}
                            </Box>
                            <Box className="total_price_box red_solid">
                                <Box className="boxTotal">
                                    <p>mahuslot narxi </p>
                                    <p>${order.order_total_amount - order.order_delivery_cost}</p>
                                    <img src="/icons/Plus.svg" style={{ marginLeft: "20px" }} alt="" />
                                    <p>yetkazish xizmati </p>
                                    <p>${order.order_delivery_cost}</p>
                                    <img src="/icons/Pause.svg" style={{ marginLeft: "20px" }} alt="" />
                                    <p>jami narx</p>
                                    <p>${order.order_total_amount}</p>

                                </Box>
                            </Box>
                        </Box>
                    )
                })}
            </Stack>
        </TabPanel>
    )
}