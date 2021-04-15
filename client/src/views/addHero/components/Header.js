import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom"

import imgSectionImg from "./sectionBtnImg/Img.png"
import imgSectionImgImg from "./sectionBtnImg/ImgImg.png"
import imgSectionImgText from "./sectionBtnImg/ImgText.png"
import imgSectionText from "./sectionBtnImg/Text.png"
import imgSectionTextText from "./sectionBtnImg/TextText.png"
import imgSectionTextImg from "./sectionBtnImg/TextImg.png"

import { 
  typeSectionImgText,
  typeSectionTextImg,
  typeSectionText,
  typeSectionImg,
  typeSectionTextText,
  typeSectionImgImg 
} from "../index"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function Header(props) {
  const classes = useStyles();

  const state = props.state

  const toggleDrawer = props.toggleDrawer

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    > 
      <p style = {{ fontSize: "1.5rem", color: "#3F51B5", textAlign: "center" }}> Секции </p>
      <hr/>
      <List>
        {[
          [imgSectionImgText, typeSectionImgText],
          [imgSectionTextImg, typeSectionTextImg],
          [imgSectionText, typeSectionText],
          [imgSectionImg, typeSectionImg],
          [imgSectionImgImg, typeSectionImgImg],
          [imgSectionTextText, typeSectionTextText],
        ].map((elem) => (
          <>
            <img 
              src= {elem[0]} 
              style = {{ cursor: "pointer" }}
              onClick={() => {props.addSection(elem[1])}}
            />
            <hr/>
          </>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <React.Fragment key={'right'}>
          <SwipeableDrawer
              anchor={'right'}
              open={state['right']}
              onClose={toggleDrawer('right', false)}
              onOpen={toggleDrawer('right', true)}
          >
              {list('right')}
          </SwipeableDrawer>
      </React.Fragment>

      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon onClick={toggleDrawer('right', true)}/>
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>

            {props.title}
            
            {props.children}
          </Typography>
          <Link to="/" style = {{ color: "#fff" }}>
            <Button color="inherit">Выйти</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}