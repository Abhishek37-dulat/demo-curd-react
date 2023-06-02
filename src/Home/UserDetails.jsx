import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import "./UserDetails.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();

  const url = "https://backend-node-pek0.onrender.com/";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return axios.get(url).then((response) => setData(response.data));
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  const deleteUser = (id) => {
    axios
      .delete("https://backend-node-pek0.onrender.com/" + id)
      .then((res) => console.log(res.data));
    setData(data.filter((el) => el._id !== id));
  };

  return (
    <div className="home">
      <div className="home-top">
        <div className="home-title">Users Details</div>
        <div className="home-creat-button" onClick={() => navigate("/add")}>
          <p>+</p>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Course</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((data) => (
              <TableRow
                key={data._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data.name}
                </TableCell>
                <TableCell align="right">{data.email}</TableCell>
                <TableCell align="right">{data.phone}</TableCell>
                <TableCell align="right">{data.course}</TableCell>
                <TableCell align="right">
                  <button
                    className="update-button"
                    onClick={() => navigate("/update/" + data._id)}
                  >
                    Update
                  </button>
                </TableCell>
                <TableCell align="right">
                  <button
                    className="delete-button"
                    onClick={() => deleteUser(data._id)}
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserDetails;
