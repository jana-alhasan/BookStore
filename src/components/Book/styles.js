import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  BookInfo: {
    "&.MuiStack-root": {
      marginTop: "80px",
    },
  },
  augAuth: {
    borderRadius: "3.004px",
    border: "1px solid var(--violet, #C689C6)",
    color: "var(--violet, #C689C6);",
    fontSize: "16px",
    fontWeight: "400",
    padding: "2% ",
  },

  headerBook: {
    "&.MuiTypography-root": {
      color: "black",
      fontWeight: "700",
      fontSize: "48px",
    },
  },
  descriptionOfTheBook: {
    "&.MuiTypography-root": {
      color: "#4D4C4C",
      fontSize: "18px",
      lineHeight: "24.033px",
      maxWidth: "70%",
    },
  },

  view: {
    "&.MuiButton-contained": {
      borderRadius: "2.003px",
      backgroundColor: "#937DC2",
      color: "white",
      border: "1px solid #937DC2",
      padding: "2% 4%",
      textWrap: "nowrap",

      "&:hover": {
        backgroundColor: "#482c83",
      },
    },
  },
  discount: {
    "&.MuiTypography-root": {
      color: "rgba(32, 31, 31, 0.8)",
      textTransform: "uppercase",
      fontSize: "20px",
      fontWeight: "400",
      marginTop: "90px",
    },
  },
  dividers: {
    "&.MuiDivider-root": {
      background: "#937DC2",
      width: "0.001px",
      height: "70.097px",
      opacity: "0.3",
    },
  },
  icon: {
    "&.MuiSvgIcon-root": {
      fontSize: "50px",
      color: "#382C2C",
    },
  },
  choiceP: {
    "&.MuiTypography-root": {
      color: "black",
      fontSize: "24px",
      fontWeight: "600",
    },
  },

}));
export default useStyles;
