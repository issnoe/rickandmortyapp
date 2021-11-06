import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Link as LinkText,
  Box,
} from '@material-ui/core';
import Link from 'next/link';
import Image from 'next/image';
import Logo from 'assets/logo.png';

export default function Header() {
  const classes = useStyles();
  const menu = [
    { label: 'Characters', href: '/characters' },
    { label: 'Locations', href: '/locations' },
  ].map(({ label, href }) => (
    <Link href={href} key={href}>
      <Button color="inherit">{label}</Button>
    </Link>
  ));

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Box className={classes.logoBox}>
            <Image src={Logo} alt="Logo Header" height={70} width={190} />
          </Box>
          <Typography variant="h6" className={classes.title}>
            <Link href="/">
              <LinkText href="" color="inherit"></LinkText>
            </Link>
          </Typography>
          {menu}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logoBox: {
    margin: '5px 10px',
  },
  logo: {
    width: '10px',
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
}));
