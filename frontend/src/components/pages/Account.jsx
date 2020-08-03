import React, { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import UserService from "../../services/UserService";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  text: {
    margin: "0.3rem 0rem",
  },
  button: {},
});

function Account(props) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    phone: "",
  });

  useEffect(() => {
    setLoading(true);
    const getUser = async () => {
      const response = await UserService.getUserDetails();
      setUser(response.data);
    };
    getUser();
    setLoading(false);
  }, []);

  const onChange = (e) => {
    switch (e.target.name) {
      case "email":
        setUser({
          email: e.target.value,
          password: user.password,
          firstname: user.firstname,
          lastname: user.lastname,
          phone: user.phone,
        });
        break;
      case "password":
        setUser({
          email: user.email,
          password: e.target.value,
          firstname: user.firstname,
          lastname: user.lastname,
          phone: user.phone,
        });
        break;
      case "firstname":
        setUser({
          email: user.email,
          password: user.password,
          firstname: e.target.value,
          lastname: user.lastname,
          phone: user.phone,
        });
        break;
      case "lastname":
        setUser({
          email: user.email,
          password: user.password,
          firstname: user.firstname,
          lastname: e.target.value,
          phone: user.phone,
        });
        break;
      case "phone":
        setUser({
          email: user.email,
          password: user.password,
          firstname: user.firstname,
          lastname: user.lastname,
          phone: e.target.value,
        });
        break;
      default:
    }
  };

  const update = () => {
    UserService.updateProfile(user).then((res) => {
      console.log(res.status);
    });
  };
  const getContent = () => {
    if (loading) {
      return <CircularProgress />;
    } else {
      return (
        <FormControl>
          <TextField
            className={classes.text}
            variant="outlined"
            label="Email"
            name="email"
            type="email"
            defaultValue={user.email}
          />
          <TextField
            className={classes.text}
            variant="outlined"
            label="Password"
            name="password"
            type="password"
            onChange={onChange}
          />
          <TextField
            className={classes.text}
            variant="outlined"
            label="First Name"
            name="firstname"
            onChange={onChange}
          />
          <TextField
            className={classes.text}
            variant="outlined"
            label="Last Name"
            name="lastname"
            onChange={onChange}
          />
          <TextField
            className={classes.text}
            variant="outlined"
            label="Phone"
            name="phone"
            type="tel"
            onChange={onChange}
          />
          <Button onClick={update}>Update profile</Button>
        </FormControl>
      );
    }
  };
  return <div className={classes.root}>{getContent()}</div>;
}

export default Account;
