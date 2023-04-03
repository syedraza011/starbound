import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/robsStyles/Destinations.module.css";
import mer from "../styles/assets/planets/mercury.jpg";
import ven from "../styles/assets/planets/venus.jpg";
import mar from "../styles/assets/planets/mars.png";
import jup from "../styles/assets/planets/jupiter.jpg";
import sat from "../styles/assets/planets/saturn.jpg";
import nep from "../styles/assets/planets/neptune.jpg";
import ura from "../styles/assets/planets/uranus.jpg";

const Destinations = () => {
  return (
    <>
      <h1 className={styles.desHead} >DESINATIONS</h1>
      <div className={styles.desScroll} >
         <div className={styles.desPlnts}>
          <div className={styles.desPlntsText}>
          <h2 className={styles.desHead} >MERCURY</h2>
          <p>
            The smallest planet in our solar system and nearest to the Sun,
            Mercury is only slightly larger than Earth's Moon.
          </p>
          <p>
            From the surface of Mercury, the Sun would appear more than three
            times as large as it does when viewed from Earth, and the sunlight
            would be as much as seven times brighter. Despite its proximity to
            the Sun, Mercury is not the hottest planet in our solar system. That
            title belongs to nearby Venus, thanks to its dense atmosphere.
          </p>
          <p>
            Because of Mercury's elliptical "egg-shaped" orbit, and sluggish
            rotation, the Sun appears to rise briefly, set, and rise again from
            some parts of the planet's surface. The same thing happens in
            reverse at sunset.
          </p>
          <h2 className={styles.desBttn} >
            <Link href={"/bookings"}>BOOK A FlIGHT RIGHT NOW!</Link>
          </h2>
        </div>
        <div>
          <Image src={mer} height="500" width="500" alt="" />
        </div>
      </div>

      <div className={styles.desPlnts}>
        <div className={styles.desPlntsText}>
          <h2 className={styles.desHead} >VENUS</h2>
          <p>
            Venus is the second planet from the Sun and is Earth's closest
            planetary neighbor. It's one of the four inner, terrestrial (or
            rocky) planets, and it's often called Earth's twin because it’s
            similar in size and density. These are not identical twins, however
            there are radical differences between the two worlds.
          </p>
          <p>
            Venus has a thick, toxic atmosphere filled with carbon dioxide and
            it’s perpetually shrouded in thick, yellowish clouds of sulfuric
            acid that trap heat, causing a runaway greenhouse effect. It’s the
            hottest planet in our solar system, even though Mercury is closer to
            the Sun. Surface temperatures on Venus are about 900 degrees
            Fahrenheit (475 degrees Celsius) hot enough to melt lead. The
            surface is a rusty color and it's peppered with intensely crunched
            mountains and thousands of large volcanoes. Scientists think it's
            possible some volcanoes are still active.
          </p>
          <h2 className={styles.desBttn} >
            <Link href={"/bookings"}>BOOK A FlIGHT RIGHT NOW!</Link>
          </h2>
        </div>
        <div>
          <Image src={ven} height="500" width="500" />
        </div>
      </div>

      <div className={styles.desPlnts}>
        <div className={styles.desPlntsText}>
          <h2 className={styles.desHead} >Mars</h2>
          <p>
            ​Mars is the fourth planet from the Sun - a dusty, cold, desert
            world with a very thin atmosphere. Mars is also a dynamic planet
            with seasons, polar ice caps, canyons, extinct volcanoes, and
            evidence that it was even more active in the past.
          </p>
          <p>
            Mars is one of the most explored bodies in our solar system, and
            it's the only planet where we've sent rovers to roam the alien
            landscape.
          </p>
          <p>
            An international fleet of eight orbiters is studying the Red Planet
            from above including three NASA orbiters: 2001 Mars Odyssey, Mars
            Reconnaissance Orbiter, and MAVEN.
          </p>
          <p>
            These robotic explorers have found lots of evidence that Mars was
            much wetter and warmer, with a thicker atmosphere, billions of years
            ago.
          </p>
          <h2 className={styles.desBttn} >
            <Link href={"/bookings"}>BOOK A FlIGHT RIGHT NOW!</Link>
          </h2>
        </div>
        <div>
          <Image src={mar} height="500" width="500" />
        </div>
      </div>

      <div className={styles.desPlnts}>
        <div className={styles.desPlntsText}>
          <h2 className={styles.desHead} >JUPITER</h2>
          <p>
            Jupiter has a long history of surprising scientists – all the way
            back to 1610 when Galileo Galilei found the first moons beyond
            Earth. That discovery changed the way we see the universe.
          </p>
          <p>
            Fifth in line from the Sun, Jupiter is, by far, the largest planet
            in the solar system – more than twice as massive as all the other
            planets combined.
          </p>
          <p>
            Jupiter's familiar stripes and swirls are actually cold, windy
            clouds of ammonia and water, floating in an atmosphere of hydrogen
            and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger
            than Earth that has raged for hundreds of years.
          </p>
          <h2 className={styles.desBttn} >
            <Link href={"/bookings"}>BOOK A FlIGHT RIGHT NOW!</Link>
          </h2>
        </div>
        <div>
          <Image src={jup} height="500" width="500" />
        </div>
      </div>

      <div className={styles.desPlnts}>
        <div className={styles.desPlntsText}>
          <h2 className={styles.desHead} >SATURN</h2>
          <p>
            Saturn is the sixth planet from the Sun and the second-largest
            planet in our solar system.
          </p>
          <p>
            Adorned with thousands of beautiful ringlets, Saturn is unique among
            the planets. It is not the only planet to have rings – made of
            chunks of ice and rock – but none are as spectacular or as
            complicated as Saturn's.
          </p>
          <p>
            Like fellow gas giant Jupiter, Saturn is a massive ball made mostly
            of hydrogen and helium.
          </p>
          <h2 className={styles.desBttn} >
            <Link href={"/bookings"}>BOOK A FlIGHT RIGHT NOW!</Link>
          </h2>
        </div>
        <div>
          <Image src={sat} width={500} />
        </div>
      </div>

      <div className={styles.desPlnts}>
        <div className={styles.desPlntsText}>
          <h2 className={styles.desHead} >URANUS</h2>
          <p>
            Uranus is the seventh planet from the Sun, and has the third-largest
            diameter in our solar system. It was the first planet found with the
            aid of a telescope, Uranus was discovered in 1781 by astronomer
            William Herschel, although he originally thought it was either a
            comet or a star.
          </p>
          <p>
            It was two years later that the object was universally accepted as a
            new planet, in part because of observations by astronomer Johann
            Elert Bode. Herschel tried unsuccessfully to name his discovery
            Georgium Sidus after King George III. Instead, the scientific
            community accepted Bode's suggestion to name it Uranus, the Greek
            god of the sky, as suggested by Bode.​
          </p>
          <h2 className={styles.desBttn} >
            <Link href={"/bookings"}>BOOK A FlIGHT RIGHT NOW!</Link>
          </h2>
        </div>
        <div>
          <Image src={ura} height="500" width="500" />
        </div>
      </div>

      <div className={styles.desPlnts}>
        <div className={styles.desPlntsText}>
          <h2 className={styles.desHead} >NEPTUNE</h2>
          <p>
            Dark, cold, and whipped by supersonic winds, ice giant Neptune is
            the eighth and most distant planet in our solar system
          </p>
          <p>
            More than 30 times as far from the Sun as Earth, Neptune is the only
            planet in our solar system not visible to the naked eye and the
            first predicted by mathematics before its discovery. In 2011 Neptune
            completed its first 165-year orbit since its discovery in 1846.
          </p>
          <p>
            Like fellow gas giant Jupiter, Saturn is a massive ball made mostly
            of hydrogen and helium.
          </p>
          <h2 className={styles.desBttn} >
            <Link href={"/bookings"}>BOOK A FlIGHT RIGHT NOW!</Link>
          </h2>
        </div>
        <div>
          <Image src={nep} height="500" width="500" />
        </div>
      </div>
      </div>
     
      <div className="main"></div>
    </>
  );
};
export default Destinations;
