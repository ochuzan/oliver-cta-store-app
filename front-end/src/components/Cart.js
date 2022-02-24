import * as React from 'react';
import Box from "@mui/material/Box";
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

function Cart({ cart }) {
    const formatPrice = (price) => `$${Number(price).toFixed(2)}`;

    let cartList;
    if(cart.length > 0){
        cartList = cart.map((item) => {
            return (
                <div key={item.id}>
                    <Link to={`/keyboards/${item.id}`}>
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
    } else {
        cartList = <h3 className='empty-cart'>Your Cart is Empty</h3>
    }

    let subTotal;
    if(cart.length > 0){
        subTotal = cart.reduce((sum, { price }) => {
            return sum + Number(price);
        }, 0)
    } else {
        subTotal = 0
    }
    return(
        <div className='cart-summary'>
            <div className="typewriter">
                <h2>Your Cart Summary</h2>
            </div>
            <Box
                className="box"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    bgcolor: 'rgba(240,248,255, .9)',
                    border: 1,
                    height: 350,
                    borderRadius: 5,
                    boxShadow: 10
                }}
            >
                <List sx={{ width: '100%', bgcolor: 'background.paper',textAlign: 'center' }}>
                    {cartList}
                </List>

                <h3>Subtotal: {formatPrice(subTotal)} </h3>
                <p>Taxes and shipping calculated at checkout</p>
                <IconButton color="primary" component="span" >
                    <ShoppingCartCheckoutRoundedIcon></ShoppingCartCheckoutRoundedIcon>
                    <Typography sx={{ display: 'inline', textAlign: 'center' }}>Check Out</Typography>
                </IconButton>
            </Box>
        </div>
    )
}

export default Cart;