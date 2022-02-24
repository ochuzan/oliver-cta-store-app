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
            <div key={item.id}>
                <Link to={`/keyboards/${item.id}`} onClick={toggleDrawer(false)}>
                    <ListItem  alignItems="flex-start">
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
                </Link>
                <Divider variant="inset" component="li" />
            </div>
        )
    })

    let subTotal;
    if(cart.length > 0){
        subTotal = cart.reduce((sum, { price }) => {
            return sum + Number(price);
        }, 0)
    } else {
        subTotal = 0
    }

    return(
        <Drawer
            anchor="right"
            open={open}
            variant="temporary"
            onClose={toggleDrawer(false)}
          >
            <div className="typewriter">
                <h2>Your Cart</h2>

            </div>
            <Divider />
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {cartList}
            </List>
            <div className='cart-drawer-overview'>
                <Divider />
                <h3>Subtotal: {formatPrice(subTotal)} </h3>
                <p>Taxes and shipping calculated at checkout</p>
                <IconButton color="primary" component="span" onClick={toggleDrawer(false)}>
                    <Link to="/cart">
                        <ShoppingCartCheckoutRoundedIcon></ShoppingCartCheckoutRoundedIcon>
                        <Typography sx={{ display: 'inline', textAlign: 'center' }}>Check Out</Typography>
                    </Link>
                </IconButton>
            </div>
          </Drawer>
    )
}

export default CartDrawer;