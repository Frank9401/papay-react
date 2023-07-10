import React, { useState } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import "../../../css/orders.css"
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import ProcessOrders from "../../components/orders/processOrders";
import FinishedOrders from "../../components/orders/finishedOrders";
import PausedOrders from "../../components/orders/pausedOrders";
import Marginer from "../../components/marginer";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";



export function OrdersPage() {
    /**INITIALIZATION  */
    const [value, setValue] = useState("1");
    console.log("PASSED HERE");
    console.log("value", value);


    /***HANDLERS */
    const handleChange = (event: any, newValue: string) => {
        console.log("newValue", newValue);
        setValue(newValue);
    }
    return (
        <div className="order_page">
            <Container
                maxWidth="lg"
                style={{ display: "flex", flexDirection: "row", marginTop: "50px", marginBottom: "50px" }}
            >
                <Stack className="order_left">
                    <TabContext value={value}>
                        <Box className="order_nav_frame">
                            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                                <TabList
                                    onChange={handleChange}
                                    value={value}
                                    aria-label="basic tabs example"
                                    style={{ display: "flex", justifyContent: "space-between", color: "#0055FF" }}
                                >
                                    <Tab label="Buyurtmalarim" value={"1"} />
                                    <Tab label="Jarayon" value={"2"} />
                                    <Tab label="Yakunlangan" value={"3"} />
                                </TabList>
                            </Box>
                        </Box>
                        <Stack className="order_main_content">
                            <PausedOrders />
                            <ProcessOrders />
                            <FinishedOrders />
                        </Stack>
                    </TabContext>
                </Stack>

                <Stack className="order_right">
                    <Stack className="order_info_box">
                        <Stack sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Box className="order_user_img">
                                <img src="http://papays.uz/auth/default_user.svg" className="order_user_avatar" alt="" />
                                <Box className="order_user_icon_box">
                                    <img src="http://papays.uz/icons/user_icon.svg" className="order_user_prof_img" alt="" />
                                </Box>
                            </Box>
                            <span className="order_user_name">Frank</span>
                            <span className="order_user_prof">User</span>
                            <Box sx={{width:"250%", marginTop:"40px", marginBottom:"8px"}}>
                            <Marginer
                                direction="horizontal"
                                height="3"
                                width="200%"
                                bg="grey"
                            />
                            </Box>
                           
                            <Stack className="order_user_address">
                                <Box sx={{ display: "flex" }}>
                                    <LocationOnRoundedIcon />
                                </Box>
                                <Box className="spec_address_text">Busan,Korea</Box>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack className="order_info_box">
                        <input className="card_input" type="text" name="card_number" placeholder="Card number: 1234 7456 5678 9012" />
                        <Stack sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <input type="text" name="card_period" placeholder="07 / 24" className="card_half_input" />
                            <input type="text" name="card_cvv" placeholder="CVV : 013" className="card_half_input" />
                        </Stack>
                        <input type="text" name="card_creator" placeholder="Javokhirbek Eshboltaev" className="card_input" />
                        <Stack className="card_box">
                            <img src="/icons/western-union.svg" alt="1" />
                            <img src="http://papays.uz/icons/master_card.svg" alt="2" />
                            <img src="/icons/paypal_card.svg" alt="3" />
                            <img src="/icons/visa_card.svg" alt="4" />
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}