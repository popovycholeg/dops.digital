export const styles = (theme) => ({
  root: {
    color: "red",
    height: 2,
    width: "45%",
    marginTop: "20px",
  },
  thumb: {
    height: 14,
    width: 30,
    backgroundColor: "#fff",
    borderRadius: "20%",
    marginTop: -7,
    marginLeft: -15,
    "&:focus, &:hover, &$active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      "@media (hover: none)": {
        boxShadow:
          "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",
      },
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 12px)",
    top: -22,
    "& *": {
      background: "transparent",
      color: "#494949",
    },
  },
  track: {
    height: 0,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: "#494949",
  },
  mark: {
    backgroundColor: "#494949",
    height: 20,
    width: 1,
    marginTop: -10,
  },
  markActive: {
    opacity: 1,
    backgroundColor: "#494949",
  },
  markLabel: {
    marginTop: 10,
    color: "#494949",
  },
});
