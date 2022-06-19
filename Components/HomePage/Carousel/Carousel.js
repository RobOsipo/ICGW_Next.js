import React, {useState} from 'react'
import Image from 'next/image'

import Carousel from 'react-bootstrap/Carousel';
import classes from './Carousel.module.scss'

import one from '../../../public/homeImages/gunUSA.jpg'
import two from '../../../public/homeImages/win1.jpg'
import three from '../../../public/homeImages/win5.jpg'
import four from '../../../public/homeImages/gunOnDeck.jpg'
import five from '../../../public/homeImages/gunInLight.jpg'
import six from '../../../public/homeImages/fullR2.jpg'
import seven from '../../../public/homeImages/FullSizeR001.jpg'
import eight from '../../../public/homeImages/smallgun.jpg'
import nine from '../../../public/homeImages/gunimg.jpg'
import ten from '../../../public/homeImages/gunTip.jpg'
import eleven from '../../../public/homeImages/gunRange.jpg'
import twelve from '../../../public/homeImages/zombieKiller.jpg'
import thirteen from '../../../public/homeImages/customgun.jpg'
import fourteen from '../../../public/homeImages/partsOnTowel.jpg'
import fifteen from '../../../public/homeImages/gun&shells.jpg'
import sixteen from '../../../public/homeImages/workbench.jpg'
import seventeen from '../../../public/homeImages/gunRange2.jpg'

const HomeCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    }

    return (
        <div id={classes.id} >
          <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
            <Carousel.Item interval={null} >
              {/* <img
                className="d-block w-100"
                src="https://i.ibb.co/2WhdH9b/gunUSA.jpg"
                alt="Image One"
              /> */}
              <Image src={one} alt="Image One" />
              <Carousel.Caption>
                <h3>Label for first slide</h3>
                <p>Sample Text for Image One</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={null} >
              <Image src={two} alt="Image Two" />
              <Carousel.Caption>
                <h3>Label for second slide</h3>
                <p>Sample Text for Image Two</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={null} >
              <Image src={three} alt="Image Two" />
              <Carousel.Caption>
                <h3>Label for second slide</h3>
                <p>Sample Text for Image Two</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={null} >
              <Image src={four} alt="Image Two" />
              <Carousel.Caption>
                <h3>Label for second slide</h3>
                <p>Sample Text for Image Two</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={null} >
              <Image src={five} alt="Image Two" />
              <Carousel.Caption>
                <h3>Label for second slide</h3>
                <p>Sample Text for Image Two</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={null} >
              <Image src={six} alt="Image Two" />
              <Carousel.Caption>
                <h3>Label for second slide</h3>
                <p>Sample Text for Image Two</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={null} >
              <Image src={seven} alt="Image Two" />
              <Carousel.Caption>
                <h3>Label for second slide</h3>
                <p>Sample Text for Image Two</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={null} >
              <Image src={eight} alt="Image Two" />
              <Carousel.Caption>
                <h3>Label for second slide</h3>
                <p>Sample Text for Image Two</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={null} >
              <Image src={nine} alt="Image Two" />
              <Carousel.Caption>
                <h3>Label for second slide</h3>
                <p>Sample Text for Image Two</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={null} >
              <Image src={ten} alt="Image Two" />
              <Carousel.Caption>
                <h3>Label for second slide</h3>
                <p>Sample Text for Image Two</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={null} >
              <Image src={eleven} alt="Image Two" />
              <Carousel.Caption>
                <h3>Label for second slide</h3>
                <p>Sample Text for Image Two</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={null} >
              <Image src={twelve} alt="Image Two" />
              <Carousel.Caption>
                <h3>Label for second slide</h3>
                <p>Sample Text for Image Two</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={null} >
              <Image src={thirteen} alt="Image Two" />
              <Carousel.Caption>
                <h3>Label for second slide</h3>
                <p>Sample Text for Image Two</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={null} >
              <Image src={fourteen} alt="Image Two" />
              <Carousel.Caption>
                <h3>Label for second slide</h3>
                <p>Sample Text for Image Two</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={null} >
              <Image src={fifteen} alt="Image Two" />
              <Carousel.Caption>
                <h3>Label for second slide</h3>
                <p>Sample Text for Image Two</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={null} >
              <Image src={sixteen} alt="Image Two" />
              <Carousel.Caption>
                <h3>Label for second slide</h3>
                <p>Sample Text for Image Two</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={null} >
              <Image src={seventeen} alt="Image Two" />
              <Carousel.Caption>
                <h3>Label for second slide</h3>
                <p>Sample Text for Image Two</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      );
}

export default HomeCarousel