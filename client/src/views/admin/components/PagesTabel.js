import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import { Link } from "react-router-dom"

const columns = [
  { id: 'name', label: 'Имя', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 170, align: 'center' },
  { id: 'date', label: 'Дата', minWidth: 170, align: 'center' },
  { id: 'status', label: 'Статус', minWidth: 70, align: 'center' },
];

function createData(page) {
  let status = ""

  if (page.status === "approved") {
    status = "Одобрено"
  }

  if (page.status === "verification") {
    status = "На проверке"
  }

  if (page.status === "rejected") {
    status = "Отклонено"
  }

  return { 
    id: page._id,
    name: `${page.surnameHero} ${page.nameHero} ${page.patronymicHero}`, 
    email: page.email, 
    date: page.createdAt, 
    status 
  };
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function PagesTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rows = []
  console.log(props.pages)
  props.pages.forEach(page => {
    rows.push(createData(page))
  })

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      console.log(value)

                      let style = { 
                        display: "block",
                        width: "100%",
                        height: "100%",
                        padding: "1rem",
                        color: "#000" 
                      };

                      if (column.id === "status") {
                        style.fontWeight = 700

                        if (value === "Одобрено") {
                          style.color = "#8bc34a"
                        }

                        if (value === "На проверке") {
                          style.color = "#fdd835"
                        }

                        if (value === "Отклонено") {
                          style.color = "#ef5350"
                        }
                      }

                      return (
                        <TableCell key={column.id} align={column.align} style = {{padding: 0}}>
                          <Link to={`../admin/page/${row.id}`} style = {style}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </Link>
                        </TableCell>
                      );
                    })}
                  </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}