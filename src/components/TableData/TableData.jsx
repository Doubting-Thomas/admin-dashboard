import * as React from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import css from "./TableData.module.css";

function tableData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rowsData = [
  tableData("Noodles", 1550321, "17 April 2023", "Approved"),
  tableData("Grilled Sashimi", 1550322, "17 April 2023", "Pending"),
  tableData("Pizza Dumplings", 1550323, "17 April 2023", "Approved"),
  tableData("Roasted Pork", 1550324, "17 April 2023", "Pending"),
];

const tableStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",

      color: "white",
    };
  }
};

export default function OrderTable() {
  return (
    <div className={css.container}>
      <h3>Recent Transactions</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0 2.4rem 4.8rem rgba(0, 0, 0, 0.075)" }}
      >
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Product ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rowsData.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className={css.status} style={tableStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell align="left" className={css.details}>
                  Details
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
//export default OrderTable;
