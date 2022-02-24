import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';

function KeyboardEditForm() {
    const [ keyboard, setKeyboard ] = useState({
        name: "",
        description: "",
        image: "",
        price: 0,
        rating: 0,
        featured: false
    });

    let { id } = useParams();
    let navigate = useNavigate();

    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${API}/keyboards/${id}`)
            .then((res) => {
                setKeyboard(res.data);
            }).catch((error) => {
                console.log(error);
            })
    }, [API]);

    const updateKeyboard = (updatedKeyboard) => {
        axios.put(`${API}/keyboards/${id}`, updatedKeyboard)
            .then((res) => {
                navigate(`/keyboards/${id}`)
            }).catch((error) => {
                console.log(error);
            })
    };

    const handleTextChange = (event) => {
        setKeyboard({...keyboard, [event.target.id]: event.target.value});
    };

    const handleCheckboxChange = () => {
        setKeyboard({...keyboard, featured: !keyboard.featured});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateKeyboard(keyboard, id);
    };

    return(
        <div className="keyboard-edit-form">
            <div className="typewriter">
                <h2>Edit Keyboard</h2>
            </div>
            <Box
                className="box"
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    bgcolor: 'rgba(240,248,255, .9)',
                    border: 1,
                    height: 350,
                    borderRadius: 5,
                    boxShadow: 10
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <div>
                    <TextField
                        required
                        id="name"
                        value={keyboard.name}
                        label="Keyboard Name"
                        onChange={handleTextChange}
                        variant="filled"
                        color="primary"
                        focused
                    />
                    <TextField
                        required
                        id="description"
                        value={keyboard.description}
                        label="Description"
                        onChange={handleTextChange}
                        variant="filled"
                        color="primary"
                        focused
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="image"
                        value={keyboard.image}
                        label="Image URL"
                        onChange={handleTextChange}
                        variant="filled"
                        color="primary"
                        focused
                    />
                    <TextField
                        required
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        id="price"
                        value={keyboard.price}
                        label="Price"
                        onChange={handleTextChange}
                        variant="filled"
                        color="primary"
                        focused
                    />
                </div>
                <div>
                    <TextField
                        required
                        inputProps={{ inputMode: 'numeric', pattern: '[0-5]*' }}
                        id="rating"
                        value={keyboard.rating}
                        label="Rating"
                        helperText="Rating of 0-5 only"
                        onChange={handleTextChange}
                        variant="filled"
                        color="primary"
                        focused
                    />
                </div>
                <div>
                    <FormGroup className="featured">
                        <FormControlLabel 
                            control={
                                <Checkbox 
                                    id="featured"
                                    checked={keyboard.featured}
                                    onChange={handleCheckboxChange}
                                    label="Featured"
                                    icon={<FavoriteBorder />}
                                    checkedIcon={<Favorite />}
                                    />
                                } 
                            label="Featured" 
                            labelPlacement="top"
                        />
                    </FormGroup>
                    <Button variant="contained" type="submit">Submit</Button>
                </div>
            </Box>
        </div>
    )
}

export default KeyboardEditForm;