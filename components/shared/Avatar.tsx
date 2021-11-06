import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';

type AvatarProps = {
  url: string;
};

export default function AvatarBase({ url }: AvatarProps) {
  const classes = useStyles();
  return <Avatar src={url} variant="rounded" />;
}

const useStyles = makeStyles(() => ({
  container: {},
}));
