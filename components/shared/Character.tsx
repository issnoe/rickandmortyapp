import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { Character } from 'lib/graphql/character.graphql';
import Image from 'next/image';
import AssetTV from 'assets/tv.png';

type CharacterCardProps = {
  data: Character;
};
const TypographyCustom = ({ text }) => (
  <Typography
    gutterBottom
    variant="h6"
    component="div"
    style={{ fontFamily: 'monospace' }}
  >
    {text}
  </Typography>
);
export default function CharacterCard({ data }: CharacterCardProps) {
  return (
    <Grid container spacing={3}>
      <Grid item md={6} xs={12}>
        <Card>
          <CardMedia
            component="img"
            loading="eager"
            height="500"
            width="100"
            image={data.image}
          />
          <CardContent>
            <TypographyCustom text={`Species ${data.species}`} />
            <TypographyCustom text={`Gender ${data.gender}`} />
            <TypographyCustom text={`Location  ${data.location.name}`} />
            <TypographyCustom text={`Dimension ${data.location.dimension}`} />
            <TypographyCustom text={`Status ${data.status}`} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6} xs={12}>
        <Typography variant="h4" color="inherit" paragraph>
          Episodes
        </Typography>
        <Card>
          <List>
            {data.episode.map((episode) => (
              <ListItem>
                <ListItemAvatar>
                  <Image
                    src={AssetTV}
                    alt="Logo Header"
                    height={40}
                    width={40}
                  />
                </ListItemAvatar>
                <ListItemText
                  secondary={episode.episode}
                  primary={episode.name}
                />
              </ListItem>
            ))}
          </List>
        </Card>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles(() => ({
  container: {},
}));
