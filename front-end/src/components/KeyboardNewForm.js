import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';

function KeyboardNewForm() {
    const [ keyboard, setKeyboard ] = useState({
        name: "",
        description: "",
        image: "",
        price: 0,
        rating: 0,
        featured: false
    });

    const API = process.env.REACT_APP_API_URL;
    let navigate = useNavigate();

    const addKeyboard = (newKeyboard) => {
        axios.post(`${API}/keyboards`, newKeyboard)
            .then((res) => {
                navigate("/keyboards");
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
        addKeyboard(keyboard);
    };

    return(
        <div className="keyboard-new-form">
            <h2>Request to Add a New Keyboard</h2>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField
                    required
                    id="name"
                    label="Keyboard Name"
                    onChange={handleTextChange}
                />
                <TextField
                    required
                    id="description"
                    label="Description"
                    onChange={handleTextChange}
                />
                <TextField
                    required
                    id="image"
                    label="Image URL"
                    onChange={handleTextChange}
                />
                <TextField
                    required
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    id="price"
                    label="Price"
                    // helperText="Time format is 0:00"
                    onChange={handleTextChange}
                />
                <TextField
                    required
                    inputProps={{ inputMode: 'numeric', pattern: '[0-5]*' }}
                    id="rating"
                    label="Rating"
                    helperText="Rating of 0-5 only"
                    onChange={handleTextChange}
                />
                 <FormGroup>
                    <FormControlLabel 
                        control={
                            <Checkbox 
                                id="featured"
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
            </Box>
        </div>
    )
}

export default KeyboardNewForm;