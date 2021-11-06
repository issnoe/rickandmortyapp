import {
  ImageListItem,
  ImageList,
  ImageListItemBar,
  Link,
  Button,
} from '@material-ui/core';
import React from 'react';

export default function GridBase({ data, linkRef, type }) {
  if (type == 'locations') {
    return (
      <ImageList cols={3} rowHeight={100}>
        {data.map((item, index) => (
          <ImageListItem key={`grid-base-${index}`}>
            <ImageListItemBar
              title={item.dimension}
              subtitle={item.name}
              actionIcon={
                <div>
                  <Link
                    href={`${linkRef}/${item.id}`}
                    style={{ margin: '2rem' }}
                  >
                    <Button size="small" variant="contained">
                      Learn More
                    </Button>
                  </Link>
                </div>
              }
              position="bottom"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }
  return (
    <ImageList cols={3} rowHeight={400}>
      {data.map((item, index) => (
        <ImageListItem key={`grid-base-${index}`}>
          <img
            src={`${item.image}?w=248&fit=crop&auto=format`}
            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.name}
            subtitle={item.location.name}
            actionIcon={
              <div>
                <Link href={`${linkRef}/${item.id}`} style={{ margin: '2rem' }}>
                  <Button size="small" variant="contained">
                    Learn More
                  </Button>
                </Link>
              </div>
            }
            position="bottom"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
