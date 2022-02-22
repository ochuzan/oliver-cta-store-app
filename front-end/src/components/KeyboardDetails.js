import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

function KeyboardDetails() {
    const [ keyboard, setKeyboard ] = useState({});

    const API = process.env.REACT_APP_API_URL;
    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/keyboards/${id}`)
            .then((res) => {
                setKeyboard(res.data);
                console.log(res.data)
            }).catch((error) => {
                console.log(error);
            })
    }, [API, id]);

    const handleDelete = () => {
        axios.delete(`${API}/keyboards/${id}`)
            .then((res) => {
                navigate("/keyboards")
            }).catch((error) => {
                console.log(error);
            })
    };

    return(
        <div id="product-page">
            <img src={keyboard.image} alt={keyboard.name} width="600px"/>
            <div className="product-details">
                <h3>{keyboard.name}</h3>
                <h4>{keyboard.description}</h4>
                <h4>${keyboard.price}</h4>
                <h4>Rating: {keyboard.rating}</h4>
                <div className="button-nav">
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        justifyContent="center"
                        alignItems="center" spacing={2}
                    >
                        <Link to={`/keyboards`}>
                            <Button variant="contained" color="primary">Back</Button>
                        </Link>
                        <Link to={`/keyboards/${id}/edit`}>
                            <Button variant="contained" color="success">
                                Edit
                            </Button>
                        </Link>
                        <Button onClick={handleDelete} variant="contained" color="error">
                            Delete
                        </Button>
                    </Stack>
                </div>
            </div>

        </div>
    )
}

export default KeyboardDetails;