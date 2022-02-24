import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import { Link } from "react-router-dom"

function CartDrawer({ open, toggleDrawer, cart }) {
    const formatPrice = (price) => `$${Number(price).toFixed(2)}`;

    let cartList = cart.map((item) => {
        return (
            <>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt={item.name} src={item.image} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={item.name}
                        secondary={
                        <React.Fragment>
                            <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                            >
                            {formatPrice(item.price)} : {}
                            </Typography>
                            {item.description}
                        </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
            </>
        )
    })

    return(
        <Drawer
            anchor="right"
            open={open}
            variant="temporary"
            onClose={toggleDrawer(false)}
          >
            <h2>Your Cart</h2>
            <Divider />
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {cartList}
            </List>
            <Link to="/cart">
                <IconButton color="primary" component="span" onClick={toggleDrawer(false)}>
                    <ShoppingCartCheckoutRoundedIcon></ShoppingCartCheckoutRoundedIcon>
                    <Typography sx={{ display: 'inline', textAlign: 'center' }}>Check Out</Typography>
                </IconButton>
            </Link>
          </Drawer>
    )
}

export default CartDrawer;