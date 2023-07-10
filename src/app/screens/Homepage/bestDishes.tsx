import { Box, Container, Stack } from "@mui/material";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import React from "react";

export function BestDishes() {
    return <div className="best_dishes_frame">
        <Container>
            <Stack flexDirection={"column"} alignItems={"center"}>
                <Box className="category_title">Trenddagi ovqatlar</Box>
                <Stack sx={{ mt: "43px" }} flexDirection={"row"} >
                    <Box className="dish_box">
                        <Stack className="dish_image"
                            sx={{ backgroundImage: `url('https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80')` }}>
                                <div className="dish_sale">
                                    normal size
                                </div>
                                <div className="view_btn">
                                    Batafsil ko'rish
                                    <img src={"icons/arrow_right.svg"} alt="" style={{marginLeft: "9px"}}/>
                                </div>
                        </Stack>
                        <Stack className="dish_desc">
                            <span className="dish_title_text">Chicken Mayo</span>
                            <span className="dish_desc_text">
                                <MonetizationOnIcon />
                                11
                            </span>
                        </Stack>
                    </Box>
                    <Box className="dish_box">
                        <Stack className="dish_image"
                            sx={{ backgroundImage: `url('https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80')` }}>
                                <div className="dish_sale">
                                    normal size
                                </div>
                                <div className="view_btn">
                                    Batafsil ko'rish
                                    <img src={"icons/arrow_right.svg"} alt="" style={{marginLeft: "9px"}}/>
                                </div>
                        </Stack>
                        <Stack className="dish_desc">
                            <span className="dish_title_text">Chicken Mayo</span>
                            <span className="dish_desc_text">
                                <MonetizationOnIcon />
                                11
                            </span>
                        </Stack>
                    </Box>
                    <Box className="dish_box">
                        <Stack className="dish_image"
                            sx={{ backgroundImage: `url('https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80')` }}>
                                <div className="dish_sale">
                                    normal size
                                </div>
                                <div className="view_btn">
                                    Batafsil ko'rish
                                    <img src={"icons/arrow_right.svg"} alt="" style={{marginLeft: "9px"}}/>
                                </div>
                        </Stack>
                        <Stack className="dish_desc">
                            <span className="dish_title_text">Chicken Mayo</span>
                            <span className="dish_desc_text">
                                <MonetizationOnIcon />
                                11
                            </span>
                        </Stack>
                    </Box>
                    <Box className="dish_box">
                        <Stack className="dish_image"
                            sx={{ backgroundImage: `url('https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80')` }}>
                                <div className="dish_sale">
                                    normal size
                                </div>
                                <div className="view_btn">
                                    Batafsil ko'rish
                                    <img src={"icons/arrow_right.svg"} alt="" style={{marginLeft: "9px"}}/>
                                </div>
                        </Stack>
                        <Stack className="dish_desc">
                            <span className="dish_title_text">Chicken Mayo</span>
                            <span className="dish_desc_text">
                                <MonetizationOnIcon />
                                11
                            </span>
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
        </Container>
    </div>
}