
import Link from "next/link";
import Router from "next/router";
import Image from 'next/image'

import classes from './carousel.module.css'

import one from '../../../public/homeImages/gunUSA.jpg'
import two from '../../../public/homeImages/win1.jpg'
import three from '../../../public/homeImages/win5.jpg'

export default () => (
  <div className={classes.slider}>
    <Link href="#slide-1" scroll={false}>
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
    </Link>

    <div className={classes.slides}>
      <div name="slide-1" id="slide-1" className={classes.slide}>
        <Image src={one} alt="image" />
      </div>
      <div name="slide-2" id="slide-2">
        2
      </div>
      <div id="slide-3">3</div>
      <div id="slide-4">4</div>
      <div id="slide-5">5</div>
    </div>
  </div>
);