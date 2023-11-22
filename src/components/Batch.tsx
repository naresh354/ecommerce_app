import Category1 from "../assets/list1.png";
import Category2 from "../assets/list2.png";
import Category3 from "../assets/list3.png";
import Category4 from "../assets/list5.png";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import heart from "../assets/heartTwo.png";
import share from "../assets/share.png";

const CategoryItems = [
  {
    name: "MB Fuel Whey Protein Immunity +2kg ",
    mrp: "MRP : ₹5,798",
    price: "₹3,899",
    offer: "32% off",
    image: Category1,
  },
  {
    name: "MB Fuel Whey Protein Immunity +2kg ",
    mrp: "#MRP : ₹5,798",
    price: "₹3,899",
    offer: "32% off",
    image: Category2,
  },
  {
    name: "MB Fuel Whey Protein Immunity +2kg ",
    mrp: "#MRP : ₹5,798",
    price: "₹3,899",
    offer: "32% off",
    image: Category3,
  },
  {
    name: "MB Fuel Whey Protein Immunity +2kg ",
    mrp: "#MRP : ₹5,798",
    price: "₹3,899",
    offer: "32% off",
    image: Category4,
  },
];

function CategoryList() {
  return (
    <Box sx={{ mt: 5, mb: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "78%",
          margin: "auto",
          mb: 1,
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: "800", fontSize: "0.9rem" }}>
        Just Launched{" "}
        </Typography>
        <Typography sx={{ fontWeight: "800", fontSize: "0.9rem" }}>
          View All
        </Typography>
      </Box>

      <Box
        sx={{
          width: "80%",
          margin: "auto",
          mb: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {CategoryItems?.map((e: any) => (
          <Card sx={{ maxWidth: 235, p: 1.2, backgroundColor: "#ffffff" }}>
            <Box sx={{ float: "right" }}>
              <Box component="img" src={heart}></Box>
              <Box component="img" sx={{ ml: 1, mr: 1, mb: 0.5 }} src={share} />
            </Box>
            <CardMedia
              sx={{ height: 80, width: 80, margin: "auto", p: 2 }}
              image={e?.image}
              title="green iguana"
            />
            <CardContent>
              <Typography sx={{ fontWeight: "700", fontSize: "0.8rem", mb: 1 }}>
                {e?.name}
              </Typography>
              <Typography
                sx={{
                  mb: 1,
                  fontSize: "0.7rem",
                  textDecoration: "line-through",
                }}
              >
                {e?.mrp}
              </Typography>
              <Box sx={{ display: "flex", mt: 1 }}>
                <Typography sx={{ fontSize: "0.8rem", fontWeight: "800" }}>
                  Price: {e?.price}
                </Typography>
                <Typography
                  sx={{
                    color: "#4E966E",
                    fontWeight: "700",
                    fontSize: "0.8rem",
                    ml: 1.5,
                  }}
                >
                  {e?.offer}
                </Typography>
              </Box>
            </CardContent>

            <CardActions>
              <Button
                size="small"
                startIcon={<AddShoppingCartIcon></AddShoppingCartIcon>}
                sx={{
                  border: "1px solid #F1ADFF",
                  color: "#100F1A",
                  fontWeight: "700",
                  fontSize: "0.7rem",
                  p: 1,
                  width: "100%",
                }}
                variant="outlined"
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default CategoryList;
