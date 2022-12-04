import * as React from 'react';
import {Avatar} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import {SignUpForm , LogInForm} from './registrationForm';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';


const pages = ['Become a Chef', 'Log In', 'Sign Up'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'fit',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ResponsiveAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false)
  const [openChef,setOpenChef] = React.useState(false)
  const [openSignUp,setOpenSignUp] = React.useState(false)
  const [anchorElAvatar, setAnchorElAvatar] = React.useState(null);
  const openAvatar = Boolean(anchorElAvatar);
  const handleClickAvatar = (event) => {
    setAnchorElAvatar(event.currentTarget);
  };
  const handleCloseAvatar = () => {
    setAnchorElAvatar(null);
  };

  const handleOpenChef = () => setOpenChef(true)
  const handleCloseChef = () => setOpenChef(false)

  const handleOpenSignUp = () => setOpenSignUp(true)
  const handleCloseSignUp = () => setOpenSignUp(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
      <AppBar position="static" color='transparent' sx={{'overflow':"hidden","position":"absolute"}} id='top'>
        <Container maxWidth="xl" sx={{'zIndex':11}}>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} color='black'>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
                color='black'
              >
              {props.loggedIn === false ? (pages.map((page) => (
                  <MenuItem key={page}  onClick={handleCloseNavMenu}>
                  <Button textAlign="center" onClick={(page === 'Log In' ? handleOpen
                  : page === 'Become a Chef' ? handleOpenChef
                  : page === 'Sign Up' ? handleOpenSignUp
                  : () => {} )} >{page}</Button>
                  </MenuItem>
                ))) : (<React.Fragment>
                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                          <Tooltip title="Account settings">
                            <IconButton
                              onClick={handleClickAvatar}
                              size="small"
                              sx={{ ml: 2 }}
                              aria-controls={open ? 'account-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                            >
                              <Avatar sx={{ width: 32, height: 32 }}>Mghames</Avatar>
                            </IconButton>
                          </Tooltip>
                        </Box>
                        <Menu
                          anchorEl={anchorElAvatar}
                          id="account-menu"
                          open={openAvatar}
                          onClose={handleCloseAvatar}
                          onClick={handleCloseAvatar}
                          PaperProps={{
                            elevation: 0,
                            sx: {
                              overflow: 'visible',
                              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                              mt: 1.5,
                              '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                              },
                              '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                              },
                            },
                          }}
                          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                          <MenuItem>
                            <Avatar /> Profile
                          </MenuItem>
                          <MenuItem>
                            <Avatar /> My account
                          </MenuItem>
                          <MenuItem>
                            <ListItemIcon>
                              <PersonAdd fontSize="small" />
                            </ListItemIcon>
                            Add another account
                          </MenuItem>
                          <MenuItem>
                            <ListItemIcon>
                              <Settings fontSize="small" />
                            </ListItemIcon>
                            Settings
                          </MenuItem>
                          <MenuItem>
                            <ListItemIcon>
                              <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                          </MenuItem>
                        </Menu>
                      </React.Fragment>)}
                {}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent: 'end'}}>
              {props.loggedIn === false ? (pages.map((page) => (
                <Button
                  key={page}
                  onClick={(page === 'Log In' ? handleOpen
                  : page === 'Become a Chef' ? handleOpenChef
                  : page === 'Sign Up' ? handleOpenSignUp
                  : () => {} )}
                  sx={{ my: 2, color: 'white', display: 'block',fontSize:'20px' } }
                >
                  {page}
                </Button>
              ))) : (<React.Fragment>
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClickAvatar}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
        </IconButton>
      </Tooltip>
    </Box>
    <Menu
      anchorEl={anchorElAvatar}
      id="account-menu"
      open={open}
      onClose={handleCloseAvatar}
      onClick={handleCloseAvatar}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem>
        <Avatar /> Profile
      </MenuItem>
      <MenuItem>
        <Avatar /> My account
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Add another account
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  </React.Fragment>)}
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <LogInForm/>
                  </Box>
                </Fade>
              </Modal>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openSignUp}
                onClose={handleCloseSignUp}
                closeAfterTransition
              >
                <Fade in={openSignUp}>
                  <Box sx={style}>
                    <SignUpForm/>
                  </Box>
                </Fade>
              </Modal>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openChef}
                onClose={handleCloseChef}
                closeAfterTransition
              >
                <Fade in={openChef}>
                  <Box sx={style}>
                    <SignUpForm/>
                  </Box>
                </Fade>
              </Modal>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
};
export default ResponsiveAppBar;
