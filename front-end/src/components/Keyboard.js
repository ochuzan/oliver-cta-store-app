import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from "react-router-dom";

function Keyboard({ keyboard, handleAddToCart, toggleCartDrawer }) {
    const formatPrice = (price) => `$${Number(price).toFixed(2)}`;

    return(
        <Card sx={{ maxWidth: 345 }}>
            <Link to={`/keyboards/${keyboard.id}`}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="150"
                    image={keyboard.image}
                    alt={keyboard.name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {keyboard.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {keyboard.description}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {formatPrice(keyboard.price)}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions>
                <Link to={`/keyboards/${keyboard.id}`}>
                    <Button size="small" color="primary">
                        Details
                    </Button>
                </Link>
                <Button size="small" color="primary" onClick={()=>handleAddToCart(keyboard, true)}>
                        Add to Cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default Keyboard;