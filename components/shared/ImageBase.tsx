import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

type ImageBaseProps = {
  url: string;
  name: string;
};

export default function ImageBase({ url, name }: ImageBaseProps) {
  const classes = useStyles();
  return <img src={`${url}`} srcSet={`${url}`} alt={name} loading="lazy" />;
}

const useStyles = makeStyles(() => ({
  container: {},
}));
