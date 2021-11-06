import Container from '@material-ui/core/Container';
import { Location, useLocationQuery } from 'lib/graphql/location.graphql';
import CharacterCard from 'components/shared/Character';
import Hero from 'components/shared/Hero';
import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

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
export default function LocationPage({ id }) {
  const { data, loading } = useLocationQuery({
    variables: { id: id },
  });

  if (!loading && data && data.location) {
    return (
      <Container maxWidth="lg">
        <Hero location={data.location as Location} data={null} />
        <Card>
          <CardContent>
            <TypographyCustom text={`Location  ${data.location.name}`} />
            <TypographyCustom text={`Dimension ${data.location.dimension}`} />
          </CardContent>
        </Card>
      </Container>
    );
  }

  return null;
}

LocationPage.getInitialProps = ({ query: { id } }) => {
  return { id };
};
