import { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Home() {
    const [index, setIndex] = useState(0);
    const [ keyboards, setKeyboards ] = useState([]);

    const API = process.env.REACT_APP_API_URL;

    useEffect(()=> {
        axios.get(`${API}/keyboards`)
            .then((res) => {
                let featuredKeyboards = res.data.filter((keyboard) => {
                    return keyboard.featured === true;
                })
                setKeyboards(featuredKeyboards);
                // console.log(res.data)
                // console.log(featuredKeyboards)
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    let featuredCarousel = keyboards.map((keyboard) => {
        return (
          <Carousel.Item key={keyboard.id}>
            <Link to={`/keyboards/${keyboard.id}`}>
                  <img
                      // className="d-block w-100 carousel-img"
                      className='carousel-img'
                      src={keyboard.image}
                      alt={keyboard.name}
                  />
                  <Carousel.Caption className="carousel-cap">
                      <h3 className="carousel-cap">{keyboard.name}</h3>
                      <p className="carousel-cap">{keyboard.description}</p>
                  </Carousel.Caption>
            </Link>
          </Carousel.Item>
        )
    })

    return (
      <div>
        <div className="typewriter">
          <h2>SlappinKeys</h2>
        </div>
        <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
            {featuredCarousel}
        </Carousel>
      </div>
    );
}

export default Home;