import * as React from 'react';
import Card from '@material-ui/core/Card';
import { CardActionArea, Typography, IconButton, createStyles } from '@material-ui/core';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { RadioTypes } from '../types';
import RadioImage from './RadioImage';
import PlayIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
interface State {
  favorited: boolean;
  hovered: boolean;
  selected: boolean;
}

interface Props extends RadioTypes.Labelled, WithStyles<typeof styles> {
  // style?: React.CSSProperties;
}
const styles = createStyles({
  card: {
    // maxWidth: 200,
    // minWidth: 200,
    width: 225,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardText: {
    padding: 12,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  playArrow: {
    position: 'absolute',
    fontSize: 120,
    display: 'none',
    color: 'white',
  },
  show: {
    display: 'block',
  },
  cardAction: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  favorite: {
    position: 'absolute',
    top: 0,
    right: 0,
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
        className={classes.card}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        elevation={this.state.selected ? 15 : this.state.hovered ? 8 : 2}
        // raised={this.state.selected || this.state.hovered}
      >
        <CardActionArea onClick={this.handleSelect} className={classes.cardAction}>
          <RadioImage title={name} image={image} />
          <PlayIcon
            className={[
              classes.playArrow,
              this.state.hovered && !this.state.selected && classes.show,
            ].join(' ')}
          />
          <PauseIcon
            className={[
              classes.playArrow,
              this.state.selected && this.state.hovered && classes.show,
            ].join(' ')}
          />
        </CardActionArea>
        <IconButton
          aria-label="Add to favorites"
          onClick={this.addFavorite}
          className={classes.favorite}
        >
          <FavoriteIcon color={this.state.favorited ? 'secondary' : undefined} />
        </IconButton>
        <div className={classes.cardContent}>
          <Typography variant="body1" className={classes.cardText} children={name} />
          <IconButton aria-label="Add to favorites" onClick={this.addFavorite}>
            <FavoriteIcon color={this.state.favorited ? 'secondary' : undefined} />
          </IconButton>
        </div>
      </Card>
    );
  }
}
export default withStyles(styles)(RadioCard);
