import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Character } from 'lib/graphql/character.graphql';
import { Location } from 'lib/graphql/location.graphql';
import BackGroudHero from 'assets/backHero.webp';
interface Props {
  data?: Character;
  location?: Location;
}

export default function Hero({ data, location }: Props) {
  const styles = useStyles();
  if (data) {
    return (
      <Paper className={styles.backgroundBox}>
        <div className={styles.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={styles.backgroundBoxContent}>
              <Typography variant="h2" color="inherit" paragraph>
                {data.name}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
    );
  }
  return (
    <Paper className={styles.backgroundBox}>
      <div className={styles.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={styles.backgroundBoxContent}>
            <Typography variant="h2" color="inherit" paragraph>
              {location.name}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  backgroundBox: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: `url(${BackGroudHero})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
  },
  backgroundBoxContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));
