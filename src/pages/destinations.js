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
    <div className="desPlnts">
      <h2>Mercury</h2>
      <Image src={mer} />
    </div>

    <div className="desPlnts">
      <h2>Venus</h2>
      <Image src={ven} />
    </div>
    
    <div className="desPlnts">
      <h2>Mars</h2>
      <Image src={mar} />
    </div>
    
    <div className="desPlnts">
      <h2>Jupiter</h2>
      <Image src={jup} />
    </div>
    
    <div className="desPlnts">
      <h2>Saturn</h2>
      <Image src={sat} />
    </div>
    
    <div className="desPlnts">
      <h2>Neptune</h2>
      <Image src={nep} />
    </div>

    <div className="desPlnts">
      <h2>Uranus</h2>
      <Image src={ura} />
    </div>
  </>
  )
};
export default Destinations;