//REACT
import React,{useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
//MUI COMPONENTS
import {AppBar,
  Toolbar,
  IconButton, 
  Link,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  MakeStyles,
  Typography,
}from '@material-ui/core';

//MUI ICONS
import {
  Menu as MenuIcon,
  List as ListIcon,
  Label as LabelIcon,
  Home as HomeIcon,
  LocationOn as LocationOnIcon ,
} from '@material-ui/icons';

const useStyles=makeStyles(theme => ({

  menuIcon:{
    marginRight:theme.spacing(2),
  },
  list:{
    width:'200px',
  },
  icons:{
    // paddingRight:theme.spacing(3),
  }
}));

export default function(){
  //styles 
  const classes=useStyles();

  //state
  const [drawerOpen, setDrawerOpen]=useState(false);

  //function
  const toggleDrawer=()=>{
    setDrawerOpen(!drawerOpen)
  }

  const drawerItem=[
    {text:'TodoList',icon:<ListIcon/>},
    {text:'Tags',icon:<LabelIcon/>}
  ];
  return(
  <AppBar>
    <Toolbar position='fixed'>
      {/* menu icon */}
      <IconButton onClick={toggleDrawer} className={classes.menuIcon} edge="start"><MenuIcon/></IconButton>
      {/* appbar content */}
      <Typography variant="h6" color="textPrimary" underline="none">TodoApp</Typography>
      {/* Home icon */}
      <Box flexGrow={1}/>
      <IconButton className={classes.icon}><HomeIcon/></IconButton>
      {/* location icon */}
      
      <IconButton className={classes.icon}><LocationOnIcon/></IconButton>
      
      <Button className={classes.icon} size="large">Login</Button> 
    </Toolbar>

    <Drawer anchor="left" variant="temporary" onClose={toggleDrawer} open={drawerOpen}>
      <List>
        {drawerItem.map(prop=>(
          <ListItem className={classes.list} onClick={toggleDrawer} button key={prop.text}>
            <ListItemIcon>{prop.icon}</ListItemIcon>
            <ListItemText>{prop.text}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Drawer>
  </AppBar>
  );
};
