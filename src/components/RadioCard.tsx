import * as React from 'react';
import Card from '@material-ui/core/Card';
import { CardActionArea, Typography, IconButton, createStyles } from '@material-ui/core';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { RadioTypes } from '../types';
interface State {
  favorited: boolean;
  hovered: boolean;
  selected: boolean;
}

interface Props extends RadioTypes.Labelled, WithStyles<typeof styles> {
  style?: React.CSSProperties;
}
const styles = createStyles({
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
class RadioCard extends React.Component<Props, State> {
  state = {
    favorited: false,
    hovered: false,
    selected: false,
  };
  addFavorite = () => this.setState(state => ({ favorited: !state.favorited }));

  handleHover = () => this.setState(state => ({ hovered: !state.hovered }));

  handleSelect = () => this.setState(state => ({ selected: !state.selected }));

  render() {
    const { classes, image, name } = this.props;
    return (
      <Card
        style={{
          // maxWidth: 200,
          // minWidth: 200,
          width: 225,
          display: 'flex',
          flexDirection: 'column',

        }}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        elevation={this.state.hovered ? 8 : this.state.selected ? 15 : 2}
        // raised={this.state.selected || this.state.hovered}
      >
        <CardActionArea /* style={{ height: 200 }} */ onClick={this.handleSelect}>
          <div
            // src={image}
            title={name}
            style={{
              backgroundImage: `url(${image})`,
              height: 225,
              width: 'auto',
              backgroundSize: 'cover',
              display: 'block',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
        </CardActionArea>
        <div className={classes.cardContent}>
          <Typography variant="body1" style={{ padding: 12 }}>
            {name}
          </Typography>
          <IconButton aria-label="Add to favorites" onClick={this.addFavorite}>
            <FavoriteIcon color={this.state.favorited ? 'secondary' : undefined} />
          </IconButton>
        </div>
      </Card>
    );
  }
}
export default withStyles(styles)(RadioCard);
