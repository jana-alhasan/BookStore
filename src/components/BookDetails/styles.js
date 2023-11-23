import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  bookItem: {
    "&.MuiStack-root": {
      marginTop: "2%",
    },
  },
  bookItemImg: {
    width: "50%",
  },
  bookItemDiv: {
    width: "148px",
    borderRadius: "2px",
    border: "1px solid #937dc2",
  },
  principleImage: {
    width: "412px",
    height: "653px",
    // marginTop: "2%",
  
  },
  coverImage:{
    width:"90%",
    marginTop:"5%",
  },
  title: {
    "&.MuiTypography-root": {
      color: "var(--black, #382C2C)",
      fontSize: "28px",
      fontWeight: "700",
      marginTop: "2%",
    },
  },
  author: {
    "&.MuiTypography-root": {
      color: "var(--purple-black-body-text, #4f4c57)",
      fontSize: "18px",
      fontWeight: "400",
      width: "80%",
    },
  },

  infoTitle: {
    "&.MuiTypography-root": {
      color: "rgba(198, 137, 198, 0.7)",
      fontSize: "16px ",
      textWrap: "nowrap",
 
    },
  },
  infoContent: {
    color: "var(--black, #382c2c)",
    fontSize: "16px",
    fontWeight: "400",
  
  },
  price: {
    "&.MuiTypography-root": {
      color: "var(--purple-black, #231f2d)",
      fontSize: "24px",
      fontWeight: "600",
    },
  },
  description: {
    "&.MuiTypography-root": {
      color: " #4f4c57",
      fontSize: "16px",
      fontWeight: "400",
    },
  },

  addCartFav: {
    display: "flex",
    gap: "5%",
    paddingBottom: "3%",
    borderBottom: "1px solid #937dc2",
  },
  cart: {
    "&.MuiButton-contained": {
      backgroundColor: "#937dc2",
      padding: "1.3% 8%",
      color: "white",
      fontSize: "16px",
      "&:hover": {
        backgroundColor:  "#937ac1", 
      },
    },
  },
  favorite: {
    "&.MuiButton-contained": {
      border: "1px solid var(--purple-accent, #937dc2)",
      color: "#937dc2",
      fontSize: " 16px",
      backgroundColor: "white",
      padding: "1.3% 10%",
      "&:hover": {
        backgroundColor:  "#937dc2", 
        color: "white",
      },
    },
    
  },
  MoreInfo:{
    marginTop:"2%",
  },
  rating:{
    display:"flex",
    alignItems:"center",
    gap: "2px"
  }
}));
export default useStyles;
