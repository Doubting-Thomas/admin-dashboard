import React from "react";
import css from "./UserData.module.css";
import { userInfo } from "../../data/data";
import MaterialReactTable from "material-react-table";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMemo } from "react";
import { green, purple } from "@mui/material/colors";

const UserData = () => {
  const columns = useMemo(() => [
    {
      accessorKey: "name.firstName",
      header: "First Name",
    },
    {
      accessorKey: "name.lastName",
      header: "Last Name",
    },
    {
      accessorKey: "address", //normal accessorKey
      header: "Address",
    },
    {
      accessorKey: "city",
      header: "City",
    },
    {
      accessorKey: "state",
      header: "State",
    },
  ]);
  const theme = useMemo(() =>
    createTheme({
      palette: {
        primary: {
          main: purple[500],
        },
        secondary: {
          main: green[500],
        },
      },
    })
  );
  return (
    <div className={css.container}>
      <h1>Data Grid</h1>
      <ThemeProvider theme={theme}>
        <MaterialReactTable columns={columns} data={userInfo} />
      </ThemeProvider>
    </div>
  );
};

export default UserData;
