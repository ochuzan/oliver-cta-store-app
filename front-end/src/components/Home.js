import { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                <img
                    className="d-block w-100 carousel-img"
                    src={keyboard.image}
                    alt={keyboard.name}
                />
                <Carousel.Caption className="carousel-cap">
                    <h3>{keyboard.name}</h3>
                    <p>{keyboard.description}</p>
                </Carousel.Caption>
            </Carousel.Item>
        )
    })

    return (
      <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
          {featuredCarousel}
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    );
}

export default Home;