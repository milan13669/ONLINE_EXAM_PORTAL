import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Scores = (props) => {
    console.log(props);
    const  used = props.title;
    console.log(used);
  const { id } = useParams();
  const [scores, setScore] = useState([]);
  useEffect(() => {
    getScores();
  }, []);

  const getScores = async () => {
    const response = await axios.get(
      "http://localhost:8600/user-service/user/" + used
    );
    setScore(response.data);
  };
  //   const examList = exams.map((exam, index) => <p>{exam}</p>);
  //   return <div>{examList}</div>;

  return (
    <div align="center">
      <div>
      <br/>
      <hr/>
      <br/>
      <Typography component="div" variant="h3" textAlign="center">
      PROGRESS REPORT
      </Typography>
      <Typography Align="center" component="div">
      {scores.map((score, index) => (
      <Box variant="h5"  textAlign="justify" m={1}>
      {score}
      </Box>
      ))}
      </Typography>
    </div>
    </div>
  );
};

export default Scores;
