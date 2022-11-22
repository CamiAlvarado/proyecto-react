import Carousel from 'react-bootstrap/Carousel';
import house from '../../img/house-of-dragon.jpg';
import './styles.css'

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
      <div className='container-img'>
        <img
          className="d-block w-100"
          src={house}
          alt="First slide"
        />
        </div>
        
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='container-img'>
        <img
          className="d-block w-100"
          src={house}
          alt="Second slide"
        />
        </div>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='container-img'>
        <img
          className="d-block w-100"
          src={house}
          alt="Third slide"
        />
        </div>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;