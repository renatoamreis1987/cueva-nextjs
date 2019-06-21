import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from "next/link";


export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }


  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
      >
        <Link href="index"><MenuItem><a className="menu-decoration">Inicio</a></MenuItem></Link>
        <MenuItem><Link href="eventos"><a className="menu-decoration">Eventos</a></Link></MenuItem>
        <MenuItem><Link href="galeria"><a className="menu-decoration">Galeria</a></Link></MenuItem>
        <MenuItem><Link href="patrocinadores"><a className="menu-decoration">Patrocinadores</a></Link></MenuItem>
        <MenuItem><Link href="quiene-somos"><a className="menu-decoration">¿Quiene Somos?</a></Link></MenuItem>
        <MenuItem><Link href="contacto"><a className="menu-decoration">Contáctanos</a></Link></MenuItem>
      </Menu>


      <style jsx>{`

    .menu-decoration {
      text-decoration: none;
      color: red;
    }

`}</style>

    </div>
  );
}