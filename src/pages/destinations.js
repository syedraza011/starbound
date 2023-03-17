// import react from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import mer from '../styles/assets/mercury/Mercury_in_true_color.jpg'
import ven from '../styles/assets/venus/Venus_2_Approach_Image.jpg'
import mar from '../styles/assets/mars/Tharsis_and_Valles_Marineris_-_Mars_Orbiter_Mission_(30055660701).png'
import jup from '../styles/assets/jupiter/Jupiter_New_Horizons.jpg'
import sat from '../styles/assets/saturn/Saturn_during_Equinox.jpg'
import nep from '../styles/assets/neptune/Neptune_-_Voyager_2_(29347980845)_flatten_crop.jpg'
import ura from '../styles/assets/uranus/uranusPic.jpg'

const Destinations = () => {
  return (
  <>
    <Link href="/">Home page</Link>
    <h1>Destinations</h1>
    <div className={styles.desPlnts} >

      <div className={styles.desPlntsText}>
        <h2>Mercury</h2>
        <p>The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon.</p>
        <p>From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system. That title belongs to nearby Venus, thanks to its dense atmosphere.</p>
        <p>Because of Mercury's elliptical "egg-shaped" orbit, and sluggish rotation, the Sun appears to rise briefly, set, and rise again from some parts of the planet's surface. The same thing happens in reverse at sunset.</p>
      </div>
      <div>
        <Image src={mer} height='500' width='500' />
      </div>
    </div>

    <div className={styles.desPlnts} >
      
      <div>
        <h2>Venus</h2>
      </div>
      <div>
        <Image src={ven} height='500' width='500' />
      </div>
      
    </div>
    
    <div className={styles.desPlnts}>
      <h2>Mars</h2>
      <div>
        <Image src={mar} height='500' width='500' />
      </div>
      
    </div>
    
    <div className={styles.desPlnts}>
      <h2>Jupiter</h2>
      <div>
        <Image src={jup} height='500' width='500' />
      </div>
      
    </div>
    
    <div className={styles.desPlnts}>
      <h2>Saturn</h2>
      <div >
        <Image src={sat} height='350' />
      </div>
      
    </div>
    
    <div className={styles.desPlnts}>
      <h2>Neptune</h2>
      <div>
        <Image src={nep} height='500' width='500' />
      </div>
      
    </div>

    <div className={styles.desPlnts}>
      <h2>Uranus</h2>
      <div>
        <Image src={ura} height='500' width='500' />
      </div>
      
    </div>
  </>
  )
};
export default Destinations;