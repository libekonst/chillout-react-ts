import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import {
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  CardActions,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { RadioTypes } from '../types';
type State = {
  favorited: boolean;
};

type Props = {
  name: string;
  source: string;
  img: string;
}

export class RadioCard extends Component<Props, State> {
  state = {
    favorited: false,
  };
  addFavorite = () => this.setState(state => ({ favorited: !state.favorited }));

  render() {
    const { img, name } = this.props;
    return (
      <Card style={{ maxWidth: 200, minWidth: 150 }}>
        <CardActionArea>
          <CardMedia image={img} title={name} style={{ height: 200, width: 200}} />
        </CardActionArea>
        <CardContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'spaceBetween', alignContent: 'center' }}>
          <Typography variant="body1">{name}</Typography>
          {/* <CardActions> */}
            <IconButton aria-label="Add to favorites" onClick={this.addFavorite}>
              <FavoriteIcon color={this.state.favorited ? 'secondary' : undefined} />
            </IconButton>
          {/* </CardActions> */}
        </CardContent>
      </Card>
    );
  }
}
