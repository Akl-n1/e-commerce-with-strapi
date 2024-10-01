import Drawer from "@mui/material/Drawer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// Icon left category
import WidgetsIcon from "@mui/icons-material/Widgets";
import MenuIcon from "@mui/icons-material/Menu";
// Icon right menu
import {
  SportsEsportsOutlined,
  ElectricBikeOutlined,
  MenuBookOutlined,
  Close,
  KeyboardArrowRight,
} from "@mui/icons-material";
import LaptopIcon from "@mui/icons-material/Laptop";
import { useTheme } from "@emotion/react";
import Links from "./Links";

const Header3 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Drawer state as an object to track 'right' key
  const [state, setState] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const theme = useTheme();

  return (
    <div>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          my: "5px",
        }}
      >
        {useMediaQuery("(min-width:700px)") && (
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{
                width: "222px",
                color: theme.palette.text.primary,
                border: `1px solid ${theme.palette.border.main}`,
              }}
            >
              <WidgetsIcon />
              <Typography
                sx={{ padding: "0", textTransform: "capitalize", mx: 1 }}
              >
                Dashboard
              </Typography>
              <Box flexGrow={1} />
              <KeyboardArrowRight />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{
                ".MuiList-root": {
                  width: 220,
                },
              }}
            >
              <MenuItem onClick={handleClose}>
                <SportsEsportsOutlined fontSize="small" sx={{ mr: 1 }} />
                <ListItemText>Sports Esports</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ElectricBikeOutlined fontSize="small" sx={{ mr: 1 }} />
                <ListItemText>Electronics</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <MenuBookOutlined fontSize="small" sx={{ mr: 1 }} />
                <ListItemText>Books</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <LaptopIcon fontSize="small" sx={{ mr: 1 }} />
                <ListItemText>Laptop</ListItemText>
              </MenuItem>
            </Menu>
          </div>
        )}

        {useMediaQuery("(min-width:933px)") && (
          <Stack spacing={5} direction={"row"} alignItems={"center"}>
            <Links
              title={"home"}
              title1={"OverView"}
              title2={"About"}
              title3={"contact"}
              dir={"100%"}
            />
            <Links
              title={"Pages"}
              title1={"FAQ"}
              title2={"Pricing"}
              title3={"Privecy"}
              dir={"100%"}
            />
            <Links
              title={"Mega menu"}
              title1={"Category"}
              title2={"BestSeller"}
              title3={"New Arrivals"}
              dir={"100%"}
            />
            <Links
              title={"user Account"}
              title1={"Profil"}
              title2={"Order"}
              title3={"Setting"}
              dir={"-100%"}
            />
            <Links
              title={"vendor Account"}
              title1={"Dashboard"}
              title2={"Products"}
              title3={"Sales"}
              dir={"-100%"}
            />
          </Stack>
        )}
        {/* Drawer Menu */}
        {useMediaQuery("(min-width:700px) and (max-width:932px)") && (
          <>
            <IconButton onClick={toggleDrawer("left", true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={state.left}
              onClose={toggleDrawer("left", false)}
              sx={{
                "& .MuiPaper-root": {
                  bgcolor: theme.palette.border.main,
                  color: theme.palette.text.main,
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  mx: "auto",
                  mt: 10,
                  position: "relative",
                  padding: "15px",
                }}
              >
                <IconButton
                  onClick={toggleDrawer("left", false)}
                  sx={{
                    position: "absolute",
                    left: "20px",
                    top: "-45px",
                    ":hover": {
                      rotate: "360deg",
                      transition: ".7s",
                      color: "red",
                    },
                  }}
                >
                  <Close />
                </IconButton>
                {[
                  {
                    mainlinks: "Home",
                    SubLink: ["Overview", "About Us", "Contact"],
                  },
                  {
                    mainlinks: "MagaMenu",
                    SubLink: ["Categories", "New Arrivals", "Best Sellers"],
                  },
                  {
                    mainlinks: "Pages",
                    SubLink: ["FAQ", "Pricing", "Privacy Policy"],
                  },
                  {
                    mainlinks: "User Account",
                    SubLink: ["Profile", "Orders", "Settings"],
                  },
                  {
                    mainlinks: "Vendor Account",
                    SubLink: ["Dashboard", "Products", "Sales"],
                  },
                ].map((item, index) => {
                  return (
                    <Accordion
                      key={index}
                      elevation={0}
                      sx={{
                        bgcolor: "initial",
                        my: 1,
                        padding: "3px",
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panella-content"
                        id="panella-header"
                        sx={{ my: "0" }}
                      >
                        <Typography>{item.mainlinks}</Typography>
                      </AccordionSummary>
                      <List sx={{ py: 0, my: 0 }}>
                        {item.SubLink.map((link) => (
                          <ListItem key={link} sx={{ py: 0, my: 0 }}>
                            <ListItemButton sx={{ py: "1px", my: 0 }}>
                              <ListItemText primary={link} />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    </Accordion>
                  );
                })}
              </Box>
            </Drawer>
          </>
        )}
      </Container>
    </div>
  );
};

export default Header3;
