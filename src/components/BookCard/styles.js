// BookCardStyles.js
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    "&.MuiCard-root": {
      boxShadow: "none",
      border: "none",
      width: "290px",
      padding:"0",
      margin:"0",
    },
  },
  CardMedia: {
    "&.MuiCardMedia-root": {
      height: "414.575px",

    },
  },
  cardContent: {
    "&.MuiCardContent-root": { 
      height: "148.575px",
      boxShadow: "none",
      border: "none",
      padding: "0 0 36px",
    },
  },
  title: {
    "&.MuiTypography-root": {
      fontSize: "24px",
      fontWeight: "600",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
   
    },
  },
  authors: {
    "&.MuiTypography-root": {
      fontSize: "16px",
      fontWeight: "400",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
  },
  priceContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  price: {
    "&.MuiTypography-root": {
      fontSize: "20px",
      fontWeight: "600",
    },
  },
  fav: {
    color: "#937DC2",
  },
  addButton: {
    "&.MuiButton-contained": {
      backgroundColor: "#937DC2",
      width: "100%",
      height: "48px",
      marginTop: "12%",
      borderRadius: "2px",
      color: "white",
    },
  },
}));

export default useStyles;
