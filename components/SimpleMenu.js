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
        <Link href="eventos"><MenuItem><a className="menu-decoration">Eventos</a></MenuItem></Link>
        <Link href="galeria"><MenuItem><a className="menu-decoration">Galeria</a></MenuItem></Link>
        <Link href="patrocinadores"><MenuItem><a className="menu-decoration">Patrocinadores</a></MenuItem></Link>
        <Link href="quiene-somos"><MenuItem><a className="menu-decoration">¿Quiene Somos?</a></MenuItem></Link>
        <Link href="contacto"><MenuItem><a className="menu-decoration">Contáctanos</a></MenuItem></Link>
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