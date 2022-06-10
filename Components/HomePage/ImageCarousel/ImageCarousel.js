import {useState} from 'react'
import Link from "next/link";
import {useRouter} from "next/router";
import Image from 'next/image'

import classes from './carousel.module.css'

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

export default () => {
  const [slideNumber, setSlideNumber] = useState(1)
  const router = useRouter()

  const nextSlideHandler = () => {
    setSlideNumber(prevState => prevState + 1)
    router.push(`#slide-${slideNumber}`)
  }

  const prevSlideHandler = () => {
    setSlideNumber(prevState => prevState - 1)
    router.push(`#slide-${slideNumber}`)
  }

  return (
    <div className={classes.slider}>
      
        <div className={classes.next} onClick={nextSlideHandler}><p>next</p></div>
        <div className={classes.prev} onClick={prevSlideHandler}><p>Previous</p></div>
      <div className={classes.slides}>
        <div name="slide-1" id="slide-1" className={classes.slide}>
          <Image src={one} alt="image" />
        </div>
        <div name="slide-2" id="slide-2">
        <Image src={two} alt="image" />
        </div>
        <div id="slide-3">
        <Image src={three} alt="image" />
        </div>
        <div id="slide-4">
        <Image src={four} alt="image" />
        </div>
        <div id="slide-5">
        <Image src={five} alt="image" />
        </div>
        <div id="slide-6">
        <Image src={six} alt="image" />
        </div>
        <div id="slide-7">
        <Image src={seven} alt="image" />
        </div>
        <div id="slide-8">
        <Image src={eight} alt="image" />
        </div>
        <div id="slide-9">
        <Image src={nine} alt="image" />
        </div>
        <div id="slide-10">
        <Image src={ten} alt="image" />
        </div>
        <div id="slide-11">
        <Image src={eleven} alt="image" />
        </div>
        <div id="slide-12">
        <Image src={twelve} alt="image" />
        </div>
        <div id="slide-13">
        <Image src={thirteen} alt="image" />
        </div>
        <div id="slide-14">
        <Image src={fourteen} alt="image" />
        </div>
        <div id="slide-15">
        <Image src={fifteen} alt="image" />
        </div>
        <div id="slide-16">
        <Image src={sixteen} alt="image" />
        </div>
        <div id="slide-17">
        <Image src={seventeen} alt="image" />
        </div>
        <div id="slide-18"></div>
        <div id="slide-19"></div>
        <div id="slide-20"></div>
      </div>
    </div>
  );
}

{/* <Link href="#slide-1" scroll={false}>
        <a>1</a>
      </Link>
      <Link href="#slide-2" scroll={false}>
        <a>2</a>
      </Link>
      <Link href="#slide-3" scroll={false}>
        <a>3</a>
      </Link>
      <Link href="#slide-4" scroll={false}>
        <a>4</a>
      </Link>
      <Link href="#slide-5" scroll={false}>
        <a>5</a>
      </Link> */}