import React from 'react';
import ReactToPrint from 'react-to-print';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import Slide from '@material-ui/core/Slide';
import InputAdornment from '@material-ui/core/InputAdornment';
import Avatar from '@material-ui/core/Avatar';
import PrintIcon from '@material-ui/icons/Print';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import LinkIcon from '@material-ui/icons/Link';
import MoreVertIcon from '@material-ui/icons/MoreVert';


/*
<IconButton color="inherit">
  <DeleteIcon />
</IconButton>
<IconButton color="inherit">
  <PrintIcon />
</IconButton>
<IconButton color="inherit">
  <LinkIcon />
</IconButton>
<IconButton color="inherit">
  <SaveIcon />
</IconButton>
<IconButton color="inherit">
  <MoreVertIcon />
</IconButton>
*/

class TopMenu extends React.Component {
  state = {
  };

  handlePopoverOpen = event => this.setState({ menuAnchor: event.currentTarget })

  handlePopoverClose = () => this.setState({ menuAnchor: null });

  render() {
    const {
      list,
      changeListMode,
      changeListTitle
    } = this.props;
    const avatarStyles = {
      margin: '0 1.2rem 0 1rem',
      width: 30,
      height: 30
    };
    const textInputStyles = {
      width: '10vw'
    };
    const buttonStyles = {
      marginLeft: '0.5rem'
    };
    const rankIconStyles = {
      commander: {
        bottom: '5px',
        marginLeft: '5px',
        width: '30px',
        height: '20px'
      },
      operative: {
        bottom: '5px',
        marginLeft: '5px',
        width: '20px',
        height: '20px'
      },
      corps: {
        bottom: '5px',
        marginLeft: '5px',
        width: '20px',
        height: '20px'
      },
      special: {
        bottom: '5px',
        marginLeft: '5px',
        width: '40px',
        height: '20px'
      },
      support: {
        bottom: '5px',
        marginLeft: '5px',
        width: '17px',
        height: '20px'
      },
      heavy: {
        bottom: '5px',
        marginLeft: '5px',
        width: '32px',
        height: '20px'
      }
    };
    let commanders = 0;
    let operatives = 0;
    let corps = 0;
    let specials = 0;
    let supports = 0;
    let heavies = 0;
    const maxPoints = list.mode === 'standard' ? 800 : 1600;
    let pointTotal = 0;
    list.units.forEach((unit) => {
      pointTotal += unit.totalCost;
      if (unit.rank === 'commander') commanders += 1;
      if (unit.rank === 'operative') operatives += 1;
      if (unit.rank === 'corps') corps += 1;
      if (unit.rank === 'special') specials += 1;
      if (unit.rank === 'support') supports += 1;
      if (unit.rank === 'heavy') heavies += 1;
    });
    const factionIconLocation = list.faction === 'rebels' ? '/faction/rebelsIconBlack.svg' : '/faction/empireIconBlack.svg';
    return (
      <Slide
        in
        mountOnEnter
        unmountOnExit
        direction="down"
        timeout={500}
      >
        <AppBar position="fixed" color="primary">
          <Toolbar variant="dense">
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <Avatar style={avatarStyles} src={factionIconLocation} />
              </Grid>
              <Grid item>
                <TextField
                  placeholder={list.title === '' ? 'Untitled' : list.title}
                  onChange={changeListTitle}
                />
              </Grid>
              <Grid item>
                <Typography variant="subheading">
                  {`${pointTotal}/${maxPoints}`}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={changeListMode}
                  style={buttonStyles}
                >
                  {`${list.mode}`}
                </Button>
              </Grid>
            </Grid>
            <div style={{ flexGrow: 1 }} />
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Slide>
    );
  }
}

export default TopMenu;
