import { useState } from "react";
import {
  Container,
  Drawer,
  Stack,
  Typography,
  useMediaQuery,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  MenuItem,
  Menu,
  Accordion,
  ListItem,
  Box,
  AccordionSummary,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import PersonIcon from "@mui/icons-material/Person";
import { Close, ExpandMore } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minWidth: "300px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: "-4px",
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    color: "white",
    backgroundColor: "red",
  },
}));

const options = ["All Category", "CAR", "T-shirt", "SweatShirt"];
// ================ MENU
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@emotion/react";
// Icon left category
const Header2 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen); // تغيير حالة Drawer
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setDrawerOpen(false);
    }
  };
  // menu
  const [state, setState] = useState({ left: false });

  const toggleDrawers = (anchor, open) => (event) => {
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
          my: "10px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {useMediaQuery("(max-width:699.5px)") && (
          <>
            <IconButton onClick={toggleDrawers("left", true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={state.left}
              onClose={toggleDrawers("left", false)}
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
                  onClick={toggleDrawers("left", false)}
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
        <Stack
          sx={{ alignItems: "center", textAlign: "center", color: "orange" }}
        >
          <ShoppingCartIcon />
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: "cursive",
              color: "orange",
              width: "100px",
            }}
          >
            Trend Value
          </Typography>
        </Stack>
        {useMediaQuery("(min-width:700px)") && (
          <Stack
            sx={{
              display: "flex",
              flexGrow: "0.8",
              width: "100%",
            }}
          >
            <Search
              sx={{
                display: "flex",
                borderRadius: "50px",
                position: "relative",
                border: "1px solid #a7a7a7",
                width: "100%",
                ":hover": {
                  border: "1px solid orange",
                },
                "&:focus-within": {
                  border: "1px solid orange",
                },
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Searching for…"
                inputProps={{ "aria-label": "search" }}
                sx={{
                  width: "100%",
                }}
              />
              <div>
                <List
                  component="nav"
                  aria-label="Device settings"
                  sx={{
                    bgcolor: "orange",
                    borderRadius: "0px 50px 50px 0",
                    position: "absolute",
                    right: "0",
                    p: "3px",
                  }}
                >
                  <ListItemButton
                    id="lock-button"
                    aria-haspopup="listbox"
                    aria-controls="lock-menu"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClickListItem}
                    sx={{
                      p: "0px",
                    }}
                  >
                    <ListItemText
                      secondary={options[selectedIndex]}
                      secondaryTypographyProps={{
                        sx: {
                          fontSize: "18px",
                          fontWeight: "bold",
                          textAlign: "center",
                          color: "white",
                        },
                      }}
                    />
                    <ExpandMore sx={{ color: "#fff" }} />
                  </ListItemButton>
                </List>
                <Menu
                  id="lock-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "lock-button",
                    role: "listbox",
                  }}
                >
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                      sx={{
                        "&.Mui-selected": {
                          backgroundColor: "orange", // اللون عند التحديد
                          color: "white", // لتغيير لون النص عند التحديد إذا كنت ترغب
                        },
                        "&.Mui-selected:hover": {
                          backgroundColor: "orange", // تغيير اللون عند التحويم فوق العنصر المحدد
                        },
                      }}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </Search>
          </Stack>
        )}
        <Stack direction={"row"} alignItems={"center"}>
          {useMediaQuery("(max-width:699px)") && (
            <Stack>
              <SearchIcon
                onClick={toggleDrawer}
                sx={{
                  display: "block",
                  margin: "0 10px ",
                  color: "orange",
                  cursor: "pointer",
                }}
              />
              <Drawer
                open={drawerOpen}
                onClose={toggleDrawer}
                sx={{ ".MuiPaper-root": { padding: "20px", width: "90%" } }}
              >
                <div role="presentation" onKeyDown={handleKeyDown}>
                  <Stack>
                    <Search
                      sx={{
                        borderRadius: "50px",
                        border: "1px solid #a7a7a7",
                        ":hover": {
                          border: "1px solid orange",
                        },
                        "&:focus-within": {
                          border: "1px solid orange",
                        },
                      }}
                    >
                      <SearchIconWrapper>
                        <SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder="Searching for…"
                        inputProps={{ "aria-label": "search" }}
                        sx={{
                          width: "100%",
                        }}
                      />
                    </Search>
                  </Stack>
                </div>
              </Drawer>
            </Stack>
          )}

          <IconButton
            aria-label="cart"
            sx={{ margin: "0 10px ", color: "orange" }}
          >
            <StyledBadge badgeContent={1}>
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
          <IconButton>
            <PersonIcon sx={{ color: "orange" }} />
          </IconButton>
        </Stack>
      </Container>
    </div>
  );
};

export default Header2;
