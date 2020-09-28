import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const DeleteUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  let history = useHistory();

  const loadUser = async () => {
    const result = await axios.get(
      "http://localhost:8600/user-service/user/" + id
    );
    setUser(result.data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.delete("http://localhost:9000/admin-service/user/" + id);
    history.push("/");
  };

  useEffect(() => {
    loadUser();
  }, []);
  return (
    <div>
         <br/>
      <hr/>
      <br/>
      <form onSubmit={handleSubmit}>
      <Typography component="div" variant="h3" textAlign="center">
      USER PROFILE
      </Typography>
      <Typography component="div">
      {user.map((user, index) => (
      <Box variant="h5"  textAlign="justify" m={1}>
      {user}
      </Box>
      ))}
      </Typography>
      <Button variant="contained" color="primary" type="submit">Delete User</Button>
      </form>
     
    </div>
  );
};
export default DeleteUser;
