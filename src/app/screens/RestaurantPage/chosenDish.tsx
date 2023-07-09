<<<<<<< HEAD
import React from "react"; 
import { Container, Stack, Box } from "@mui/material"; 
import { Swiper,  SwiperSlide } from "swiper/react"; 
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";  
import Marginer from "../../components/marginer"; 
import Button from "@mui/material/Button"; 
import Rating from "@mui/material/Rating"; 
import "swiper/css"; 
import "swiper/css/free-mode"; 
import "swiper/css/navigation"; 
import "swiper/css/thumbs"; 
import { FreeMode, Navigation, Thumbs } from "swiper"; 
import { Favorite, FavoriteBorder } from "@mui/icons-material"; 
import Checkbox from "@mui/material/Checkbox"; 
 
const chosen_list = Array.from(Array(3).keys()); 
 
export function ChosenDish() { 
    const label = { inputProps:{ "aria-label": "Checkbox demo" } }; 
 
    return  ( 
          <div className="chosen_dish_page"> 
            <Container className="dish_container"> 
                <Stack className="chosen_dish_slider"> 
                    <Swiper 
                    className="dish_swiper" 
                    loop={true} 
                    spaceBetween={10} 
                    navigation={true} 
                    // thumbs={{swiper: thumbsSwiper}} 
                    modules={[FreeMode, Navigation, Thumbs]} 
                    > 
                        {chosen_list.map((ele) => { 
                            const image_path = `/others/gosht.png`; 
                            return ( 
                                <SwiperSlide> 
                                    <img 
                                    style={{ width: "100%", height: "100%"}} 
                                    src={image_path} 
                                    /> 
                                     
                                </SwiperSlide> 
                            ); 
                        })} 
 
                    </Swiper> 
                     
            <Swiper 
               loop={true} 
               spaceBetween={10} 
               modules={[FreeMode, Navigation, Thumbs]} 
               style={{ width: "500px", height: "245px", marginTop: "20px" }} 
               slidesPerView={1} 
            > 
               {chosen_list.map((ele) => { 
                  const img_path = `/others/sandwich.jpg`
                  return ( 
                     <SwiperSlide style={{ width: "100%", height: "100%", display: "flex" }}> 
                        <img src={img_path} style={{ borderRadius: "15px", marginRight: "20px" }} alt="" /> 
                        <img src={img_path} style={{ borderRadius: "15px", marginRight: "20px" }} alt="" /> 
                        <img src={img_path} style={{ borderRadius: "15px", marginRight: "20px" }} alt="" /> 
                     </SwiperSlide> 
                  ) 
               })} 
            </Swiper> 
 
                     
                </Stack> 
 
                <Stack className={"chosen_dish_info_container"}> 
                    <Box className={"chosen_dish_info_box"}> 
                        <strong className={"dish_txt"}>Sweet Sandwich</strong> 
                        <span className={"resto_name"}>Texas De Brazil</span> 
                        <Box className={"rating_box"}> 
                            <Rating name="half-rating" defaultValue={3.5} precision={0.5}/> 
                            <div className={"evalution_box"}> 
                                <div 
                                style={{ 
                                    display: "flex", 
                                    alignItems: "center", 
                                    marginRight: "20px", 
                                }} 
                                > 
                                    <Checkbox 
                                    {...label} 
                                    icon={<FavoriteBorder/>} 
                                    checkedIcon={<Favorite style={{ color: "red" }}/> } 
                                    checked={true} 
                                    /> 
<span>98 ta</span> 
                                </div>
                                <div style={{ display:"flex", alignItems:"center" , marginRight: "20px" }}> 
                                    <RemoveRedEyeIcon sx={{ mr: "10px"}} /> 
                                    <span>1000 ta</span> 
                                </div> 
                            </div> 
                        </Box> 
                        <p className={"dish_desc_info"}>Juda Mazali Sandwich</p> 
                        <Marginer 
                        direction="horizontal" 
                        height="1" 
                        width="100%" 
                        bg="#000000" 
                        /> 
                        <div className={"dish_price_box"}> 
                            <span>Narx:</span> 
                            <span>$11</span> 
                        </div> 
                        <div className={"button_box"}> 
                            <Button variant="contained">Savatga qo'shish</Button> 
                        </div> 
                    </Box> 
                </Stack> 
            </Container>      
    </div> 
  ); 
}
=======
import React from "react";
import { Container, Stack, Box } from "@mui/material";
import { Swiper,  SwiperSlide } from "swiper/react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"; 
import Marginer from "../../components/marginer";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";

const chosen_list = Array.from(Array(3).keys());

export function ChosenDish() {
    const label = { inputProps:{ "aria-label": "Checkbox demo" } };

    return  (
          <div className="chosen_dish_page">
            <Container className="dish_container">
                <Stack className="chosen_dish_slider">
                    <Swiper
                    className="dish_swipper"
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    // thumbs={{swiper: thumbsSwiper}}
                    modules={[FreeMode, Navigation, Thumbs]}
                    >
                        {chosen_list.map((ele) => {
                            const image_path = `/others/sandwich.jpg`;
                            return (
                                <SwiperSlide>
                                    <img
                                    style={{ width: "100%", height: "100%"}}
                                    src={image_path}
                                    />
                                </SwiperSlide>
                            );
                        })}

                    </Swiper>
                </Stack>

                <Stack className={"chosen_dish_info_container"}>
                    <Box className={"chosen_dish_info_box"}>
                        <strong className={"dish_txt"}>Sweet Sandwich</strong>
                        <span className={"resto_name"}>Texas De Brazil</span>
                        <Box className={"rating_box"}>
                            <Rating name="half-rating" defaultValue={3.5} precision={0.5}/>
                            <div className={"evalution_box"}>
                                <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginRight: "20px",
                                }}
                                >
                                    <Checkbox
                                    {...label}
                                    icon={<FavoriteBorder/>}
                                    checkedIcon={<Favorite style={{ color: "red" }}/> }
                                    checked={true}
                                    />

                                    <span>98 ta</span>
                                </div>
                                <div style={{ display:"flex", alignItems:"center" }}>
                                    <RemoveRedEyeIcon sx={{ mr: "10px"}} />
                                    <span>1000 ta</span>
                                </div>
                            </div>
                        </Box>
                        <p className={"dish_desc_info"}>Juda Mazali Sandwich</p>
                        <Marginer
                        direction="horizontal"
                        height="1"
                        width="100%"
                        bg="#000000"
                        />
                        <div className={"dish_price_box"}>
                            <span>Narx:</span>
                            <span>$11</span>
                        </div>
                        <div className={"button_box"}>
                            <Button variant="contained">Savatga qo'shish</Button>
                        </div>
                    </Box>
                </Stack>
            </Container>     
    </div>
  );
} 
>>>>>>> a6cd3f4d1a0739b7185f0d54b76aa3bdee630543
