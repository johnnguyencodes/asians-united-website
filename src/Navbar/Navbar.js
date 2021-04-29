import { AppBar, Toolbar, List, ListItem, ListItemText } from "@material-ui/core"
import './Navbar.css';

const navLinks = [
    { title: `Home`, path: `/` },
    { title: `About Us`, path: `/about-us` },
    { title: `Projects`, path: `/projects` },
    { title: `Contact Us`, path: `/contact-us` }
];

function Navbar() {
  return (
    <div className="Navbar">
        <AppBar class="nav" position="sticky">
              <Toolbar variant="dense">
                  <List component="nav" aria-labelledby="main navigation" class="navDisplayFlex">
                      {navLinks.map(({ title, path }) => (
                        <a href={path} key={title} class="linkText">
                          <ListItem button>
                            <ListItemText primary={title} />
                          </ListItem>
                        </a>
                      ))}
                    </List>
              </Toolbar>
        </AppBar>
    </div>
  );
}

export default Navbar;