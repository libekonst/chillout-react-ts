import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { CardActionArea, Typography, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { RadioTypes } from '../types';
type State = {
  favorited: boolean;
};

export class RadioCard extends Component<RadioTypes.Labelled, State> {
  state = {
    favorited: false,
  };
  addFavorite = () => this.setState(state => ({ favorited: !state.favorited }));

  render() {
    const { image, name } = this.props;
    return (
      <Card
        style={{
          // maxWidth: 200,
          // minWidth: 200,
          width: 200,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardActionArea  /* style={{ height: 200 }} */>
          <div
            // src={image}
            title={name}
            style={{
              backgroundImage: `url(${image})`,
              height: 200,
              width: 'auto',
              backgroundSize: 'cover',
              display: 'block',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
        </CardActionArea>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
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
