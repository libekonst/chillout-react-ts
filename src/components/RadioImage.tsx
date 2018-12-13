import React, { Component } from 'react';
import { createStyles, withStyles, WithStyles, Theme } from '@material-ui/core';
import logo from '../assets/logo-no-bg.svg';

const styles = (theme: Theme) =>
  createStyles({
    imageStyles: {
      height: 225,
      width: 'auto',
      backgroundSize: 'cover',
      display: 'block',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundColor: `${theme.palette.secondary}`,
    },
  });

interface Props extends WithStyles<typeof styles> {
  image: string;
  title?: string;
}
class RadioImage extends Component<Props, {}> {
  state = {
    image: logo,
  };

  componentDidMount() {
    const radioImage = new Image();
    radioImage.onload = () => this.setState({ image: radioImage.src });
    radioImage.src = this.props.image;
  }
  render() {
    const { classes } = this.props;
    return (
      <img
        title={name}
        // style={{ backgroundImage: `url(${this.state.image})` }}
        src={this.state.image}
        className={classes.imageStyles}
      />
    );
  }
}

export default withStyles(styles)(RadioImage);
