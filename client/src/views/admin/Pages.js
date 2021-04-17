import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Container from '@material-ui/core/Container';
import Header from "./components/Header"
import PagesTable from "./components/PagesTabel"

import { useHttp } from '../../hooks/http.hook'

const options = ["Все", "Опубликованные", "На проверке", "Отклоненные"]

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  }
}));

const Pages = () => {
  const classes = useStyles();
  const { request } = useHttp()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Select = () => {
    return (
      <>
      <List component="nav" aria-label="Device settings" style={{ display: "inline" }}>
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="Страницы"
            onClick={handleClickListItem}
          >
            <ListItemText primary="Страницы" secondary={options[selectedIndex]} className={classes.selectItem}/>
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
        </>
    )
  }

  const [pages, setPages] = React.useState([])

  const getPages = async () => {
    try {
      let data = await request('/api/hero/getPages', 'POST')
      let p = data.pages

      if (selectedIndex === 1) {
        p = p.filter(page => page.status === "approved") 
      }
      if (selectedIndex === 2) {
        p = p.filter(page => page.status === "verification") 
      }
      if (selectedIndex === 3) {
        p = p.filter(page => page.status === "rejected") 
      }

      setPages(p)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPages()
  }, [selectedIndex])

  return (
    <>
      <Header title={ <Select /> }/>
      <Container>
        <PagesTable 
          pages = {pages} 
        />
      </Container>
    </>
  )
}

export default Pages