import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import { ColorModeContext } from "../../theme";
import {
  Container,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
// select menu
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const options = ["EN", "Ar"];

const Header1 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
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

  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const isMediumScreen = useMediaQuery("(max-width:400px)");
  return (
    <Box sx={{ bgcolor: "#2B3445", padding: "10px 5px 3px 5px" }}>
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              mr: 2,
              p: "3px 10px",
              bgcolor: "#D23f57",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: "bold",
              color: "#fff",
            }}
            variant="body2"
          >
            Hot
          </Typography>
          {useMediaQuery("(min-width:400px)") && (
            <Typography
              sx={{
                mr: 2,
                p: "3px 10px",
                fontSize: "14px",
                color: "#fff",
                display: isMediumScreen ? "none" : "block", // إخفاء العنصر إذا كان min-width 400px
              }}
              variant="body2"
            >
              Free Express Shipping
            </Typography>
          )}

          <Box flexGrow={1} />
          <FacebookOutlinedIcon
            sx={{ mx: "10px", color: "#fff", ":hover": { cursor: "pointer" } }}
          />
          <InstagramIcon
            sx={{ mx: "10px", color: "#fff", ":hover": { cursor: "pointer" } }}
          />
          <div>
            <List
              component="nav"
              aria-label="Device settings"
              sx={{ p: "0px" }}
            >
              <ListItemButton
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
                sx={{ p: "6px 10px" }}
              >
                <ListItemText
                  sx={{
                    ".MuiTypography-root": {
                      color: "white",
                    },
                  }}
                  secondary={options[selectedIndex]}
                />
                <ExpandMoreIcon sx={{ fontSize: "16px", color: "white" }} />
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
              sx={{ px: "10px" }}
            >
              {options.map((option, index) => (
                <MenuItem
                  sx={{ fontSize: "10px", minHeight: "10px" }}
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined sx={{ color: "white" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ color: "white" }} />
              </IconButton>
            )}
          </div>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header1;
