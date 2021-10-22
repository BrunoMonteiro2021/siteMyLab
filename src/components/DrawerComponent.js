import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, IconButton, makeStyles } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  menuIconContainer: {
    marginLeft: '150px',
  },
}))

const handleClickFooter = (event) => {
  const anchor = (event.target.ownerDocument || document).querySelector('#footer');

  if (anchor) {
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();

  return (
    <div>
      <Drawer anchor='right' onClose={() => setOpenDrawer(false) } open={openDrawer}>
        <List>
          <ListItem divider button>
            <ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button>
            <ListItemIcon>
              <ListItemText>Serviços</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button>
            <ListItemIcon>
              <ListItemText>Sobre</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button>
            <ListItemIcon>
              <ListItemText onClick={handleClickFooter} onClose={() => setOpenDrawer(false) } open={openDrawer} >Contato</ListItemText>
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>

      <IconButton className={classes.menuIconContainer} onClick={()=>setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>

    </div>
  )
}

export default DrawerComponent;