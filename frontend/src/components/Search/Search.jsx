import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { getCities } from "../../api";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,

    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Search = (props) => {
  const classes = useStyles();
  const [ city, setCity ] = React.useState('')
  const [ cityList, setCityList ] = React.useState([])

  const handleChange = (event) => {
    setCity(event.target.value)
    props.onSubmit(event.target.value);
  };

  const getCityList = async () =>{
    if(cityList.length === 0){
      const data = await getCities();
      setCityList(data)
    }
  }

  return (
    <div className={classes.search}>
      <FormControl className={classes.margin} classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
          onMouseOver={getCityList}
        >
          <InputLabel id="citites" classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}>Enter Location</InputLabel>
          <Select
            labelId="citites"
            id="citites-select"
            value={city}
            onChange={handleChange}
            inputProps={{ "aria-label": "Search" }}
            style={{width: `300px`}}
          >
            {
              cityList.map((item) => <MenuItem value={item}>{item}</MenuItem>)
            }
          </Select>
        </FormControl>
    </div>
  );
};

export default Search;
