import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const ViewUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const response = await axios.get(
      "http://localhost:8600/user-service/user/" + id
    );
    setUser(response.data);
  };
  //   const examList = exams.map((exam, index) => <p>{exam}</p>);
  //   return <div>{examList}</div>;

  return (
    <div>
      <br/>
      <hr/>
      <br/>
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
    
    </div>
  );
};
export default ViewUser;
