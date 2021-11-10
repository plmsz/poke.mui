import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

function CustomCard({ name, image, abilities }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader className={classes.cardHeader} title={name} />
      <CardMedia className={classes.media} image={image} title={name} />
      <CardContent>
        <Typography variant="h6">Habilidades:</Typography>
        {abilities &&
          abilities.map((item) => (
            <Typography variant="body2" color="textSecondary" component="p" key={item.ability.name}>
              {item.ability.name}
            </Typography>
          ))}
      </CardContent>
    </Card>
  );
}

export default CustomCard;
