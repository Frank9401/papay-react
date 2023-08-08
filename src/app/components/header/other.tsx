import { 
    Badge, 
    Box, 
    Button, 
    Container, 
    IconButton, 
    Stack,
    Menu,
    MenuItem,
    ListItemIcon,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { Logout } from "@mui/icons-material";

export function NavbarOther (props: any) {
    return(
    <div className=" format_other home_navbar">

<Container>
            <Stack 
            flexDirection={"row"} 
            className="navbar_config" 
            justifyContent={"space-between"}
            >
              <Box>
                <img src={"/icons/Papay.svg"} />
              </Box>
              
              <Stack flexDirection={"row"}
               justifyContent="space-evenly"
               alignItems={"center"}
               className="navbar_links"
               >

                <Box className ="hover-line" onClick={props.setPath} >
                    <NavLink to="/">
                        Bosh Sahifa
                    </NavLink>
                </Box>
                <Box className ="hover-line" onClick={props.setPath} >
                    <NavLink to="/restaurant" activeClassName="underline" >
                        Oshxona
                    </NavLink>
                </Box>
                <Box className ="hover-line" >
                    <NavLink to="/" >
                        Buyurtma
                    </NavLink>
                </Box>
                <Box className ="hover-line" onClick={props.setPath} >
                    <NavLink to="/" >
                        Jamiyat
                    </NavLink>
                </Box>

                {props.verifiedMemberData ? (
              <Box className="hover-line" onClick={props.setPath}>
                <NavLink to="/member-page" activeClassName="underline">
                  Sahifam
                </NavLink>
              </Box>
            ) : null}

                <Box className ="hover-line" onClick={props.setPath}>
                    <NavLink to="/" >
                        Yordam
                    </NavLink>
                </Box>

                <Box className ="hover-line" >
                  <IconButton 
                  aria-label="cart"
                  id="basic-button"
                  aria-controls={undefined}
                  aria-haspopup="true"
                  aria-expanded={undefined}
                  //onClick={handleClick}
                  >
                    <Badge badgeContent={3} color="secondary">
                        <img src={"/icons/shopping-cart.svg"} alt=""/>
                    </Badge>
                  </IconButton>
                </Box>

                {!props.verifiedMemberData ? (
              <Box>
                <Button
                  variant="contained"
                  style={{ color: "#FFFFFF", background: "#1976d2" }}
                  onClick={props.handleLoginOpen}
                >
                  KIRISH
                </Button>
              </Box>
            ) : (
              <img
                src={props.verifiedMemberData.mb_image}
                alt="USER"
                style={{ width: "48px", height: "48px", borderRadius: "24px" }}
                onClick={props.handleLogOutClick}
              />
            )}
            <Menu
              anchorEl={props.anchorEl}
              open={props.open}
              onClose={props.handleCloseLogOut}
              onClick={props.handleCloseLogOut}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32)",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '"',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem
              onClick={props.handleLogOutRequest} >
                <ListItemIcon>
                  <Logout fontSize="small" style={{ color: "blue" }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>

                <Box>
                    <Button variant="contained" 
                    style={{color: "#FFFFF", 
                    background:"#1976d2" }} 
                    >
                        KIRISH
                    </Button>
                </Box>

               </Stack>
            </Stack>

            <Stack className="head_information" justifyContent={"row"}>
                <Stack 
                justifyContent={'column'}
                style={{ marginTop: "86px", marginLeft: "24px"}}
                >
                    <Box>
                        <img src="/icons/Wellcome.svg" />
                    </Box>
                    <Box className="define_restaurant">
                        The Authentic Restaurant & Cafe
                    </Box>
                    <Box className="timeline_service">24 soat xizmatingizdamiz.</Box>
                    <Box sx={{mt: '90px'}}>
                        <Button 
                        variant="contained" 
                        style={{
                            width: '210px', 
                            height: '60px', 
                            background:'#1976d2',
                            color: "#ffffff",
                            }}
                            >
                                RO'YXATDAN O'TISH
                            </Button>
                    </Box>
                </Stack>
               <Box className="big_img" ></Box>

            </Stack>
         </Container>


        </div>
    )
};