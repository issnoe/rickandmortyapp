import React, { useEffect, useState } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  TextField,
  CircularProgress,
  Box,
  Typography,
} from '@material-ui/core';
import { useLocationsQuery } from 'lib/graphql/locations.graphql';
import TableBase from 'components/core/table/TableBase';
import GridBase from 'components/core/grid/GridBase';
import LocationsColumns from 'dataset/table/Locations';
import TabPanel, { a11yProps } from 'components/core/tabs/TabBase';

const linkRef = 'locations';

function WrappTabs({ searchQuery }) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { data, loading, refetch } = useLocationsQuery({
    variables: {
      page: 1,
      filter: { name: searchQuery },
    },
  });

  useEffect(() => {
    refetch();
  }, []);
  return (
    <Grid item md={12} xs={12} style={{ margin: '1rem 5rem' }}>
      {loading && <CircularProgress />}

      {!loading && data && data.locations && (
        <>
          <Box mx={3}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Grid View" {...a11yProps(0)} />
              <Tab label="Table View" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <Box>
            <TabPanel value={value} index={0}>
              <GridBase
                data={data.locations.results}
                linkRef={linkRef}
                type={'locations'}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <TableBase
                rows={data.locations.results}
                columns={LocationsColumns}
                rowsPerPageOptions={10}
                pageSize={10}
                id="locations"
              />
            </TabPanel>
          </Box>
        </>
      )}
      {data && data.locations == null && (
        <div>
          <h1>{'No results'}</h1>
        </div>
      )}
    </Grid>
  );
}

export default function Locations() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <Grid container alignContent="center">
      <Grid item md={12} xs={12} style={{ margin: '1rem 5rem' }}>
        <Box mx={2}>
          <Typography variant="h4">Locations</Typography>
          <TextField
            label="Search:"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            placeholder="Morty"
            variant="standard"
          />
        </Box>
      </Grid>
      <WrappTabs searchQuery={searchQuery}></WrappTabs>
    </Grid>
  );
}
