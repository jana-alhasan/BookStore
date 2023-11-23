import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  menuBar: {
    "&.MuiAppBar-root": {
      backgroundColor: "white",
      boxShadow: "none",
      position: "static",   
      width:"100%",
      borderBottom: "1px solid #937DC2",
    },
  },
  menuItem: {
    alignItems: "center",
    color: "black",
    fontSize: "16px",
  },

  logo: {
    position: "relative",
  },

  logoText: {
    "&.MuiTypography-root": {
      color: "var(--purple-black, #231F2D)",
      fontSize: "18px",
      display: "flex",
      textWrap: "noWrap",
    },
  },

  logoImg: {
    height: "14px",
    width: "14px",
    backgroundImage:
      "linear-gradient(180deg, #937DC2 0%, #964FE7 35.21%, #D9A8EC 77.92%, #C689C6 100%)",
    borderRadius: "50%",
    marginTop: "6px",
  },
  circleIcon: {
    color: "transparent",
  },
  book: {
    position: "absolute",
    fontSize: "9px",
    color: "gray",
    left: "27px",
  },
  cap: {
    fontSize: "15.017px",
    color: "rgba(147, 125, 194, 0.60)",
  },

  vLine: {
    "&.MuiDivider-root": {
      backgroundColor: "#937DC2",
      height: "38px",
    },
  },
  search: {
    width: "80%",
    borderBottom: "none",
  },
  searchIcon: {
    position: "relative",
  },
  rightMenu: {
    "&.MuiTypography-root": {
      fontSize: "16px",
      fontWeight: "400",
      color: "var(--nav-bar-text, #7B7881)",
      textWrap: "noWrap",
    },
  },
  menuIcon: {
    color: "#937DC2",
  },
  phone: {
    color: "#937DC2",
  },
  call: {
    color: "#937DC2",
    border: " 1px solid #937DC2",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  seconditem: {
    color: "var(--body-text, #4D4C4C)",
    zIndex: "0",
  },
  secondryMenu: {
    "&.MuiTypography-root": {
      fontSize: "18px",
      fontWeight: "400",
    },
  },
}));

export default useStyles;
