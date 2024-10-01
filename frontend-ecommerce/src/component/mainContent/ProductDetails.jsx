/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// import { useState } from "react";

const ProductDetails = () => {
  //   const [selectedImg, setselectedImg] = useState(0);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex", height: "295px", width: "360px" }}>
        <img
          style={{ height: "100%", width: "100%" }}
          src="/imageSlider/banner-16.jpg"
          alt=""
        />
      </Box>

      <Box
        sx={{ py: 1, textAlign: { xs: "center", sm: "left" }, flexGrow: "1" }}
      >
        <Typography variant="h5">"WOMAN's FASHION"</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          12.5$
        </Typography>
        <Typography variant="body1">
          Mahmoud akl mahmoud mohamed akl mahmoud akl mahmoud mohamed akl
        </Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          <ToggleButtonGroup
            value={"WOMAN's FASHION"}
            exclusive
            sx={{
              ".Mui-selected": {
                border: "1px solid royalblue !important",
                borderRadius: "5px !important",
                opacity: "1",
                backgroundColor: "initial",
              },
            }}
          >
            {["/imageSlider/banner-16.jpg", "/imageSlider/banner-17.jpg"].map(
              (item, index) => {
                return (
                  <ToggleButton
                    key={index}
                    value={"$12.6"}
                    sx={{
                      width: "90px",
                      height: "90px",
                      mr: 1,
                      p: "0",
                      opacity: "1",
                    }}
                  >
                    <img
                      style={{ borderRadius: 3 }}
                      height={"100%"}
                      width={"100%"}
                      src={item}
                      alt=""
                    />
                  </ToggleButton>
                );
              }
            )}
          </ToggleButtonGroup>
        </Stack>

        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
