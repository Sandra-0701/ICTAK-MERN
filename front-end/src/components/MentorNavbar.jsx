import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Hidden } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const MentorNavbar = () => {
  return (
    <AppBar position="sticky" style={{ backgroundColor: '#06BBCC' }}>
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Grid item>
            <Typography variant="h6" style={{ color: 'white' }}>
              <i className="fa fa-book me-3" />
              ICTAK-Mentor Dashboard
            </Typography>
          </Grid>
          {/* Navigation Links & Logout Button */}
          <Grid item>
            <Hidden lgUp>
              <Button color="inherit" component={Link} to="/" className="nav-item nav-link">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/reference-material" className="nav-item nav-link">
                Reference Material
              </Button>
            </Hidden>
            <Hidden mdDown>
              <Button color="inherit" component={Link} to="/" className="nav-item nav-link">
                Home
              </Button> 
              <Button color="inherit" component={Link} to="/reference-material" className="nav-item nav-link">
                Reference Material
              </Button>
              <Button color="inherit" component={Link} to="/login">
                Logout
                <i className="fa fa-arrow-right ms-3" />
              </Button>
            </Hidden>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default MentorNavbar;
