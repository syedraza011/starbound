import styles from "@/styles/Home.module.css";
import robStyle from "@/styles/robsStyles/bPass.module.css";


export default function boardingpass() {
  return (
    <>
      <div className={robStyle.bPassBox}>
        <h1 className={robStyle.bPassHead} > BOARDING PASS </h1>
        <div className={robStyle.bPassDtlOutBox }>
        <div className={robStyle.bPassDtl} >
            <label>PASSENGER NAME</label>
            <div>
              firstNameData
            </div>
            <div>
              lastNameData
            </div>
          </div>
          <div className={robStyle.bPassDtl} >
            <label>DEPART ORIGIN</label>
            <div>
              fromData
            </div>
            <div>
              toData
            </div>
          </div>
          <div className={robStyle.bPassDtl} >
            <label>GATE & TIME</label>
            <div>
              gateData
            </div>
            <div>
              departTimeData
            </div>
          </div>
          <div className={robStyle.bPassDtl} >
            <label>SHIP & SEAT</label>
            <div>
              shipData
            </div>
            <div>
              seatData
            </div>
          </div>
          <div className={robStyle.bPassDtl} >
            <label>LAUNCH CODE:</label>
            <div>
              codeData
            </div>
          </div>
          <div className={robStyle.bPassbttn} >
            <button className={styles.btnStyle} >
              SUBMIT HERE
            </button>
          </div>
        </div>
        

        {/* <div className={styles.ticket}>
          <div className={styles.header}>
            className={styles.companyName}
            {"American Airlines"}
            <div className={styles.gate}> </div>
            <div>Gate</div>
            <div>B4</div>
          </div>
          section.airports
          <div className={styles.airport}>
            <p className={styles.airportName}>Charlotte</p>
            <p className={styles.airportCode}> CLT</p>
            .dep-arr-label Departing .time 7:45am
          </div>
          .airport .airport-name Tampa .airport-code TPA .dep-arr-label Arriving
          .time 9:15am section.place .place-block .place-label Group
          .place-value 2 .place-block .place-label Seat .place-value 2A
          .place-block .place-label Term .place-value B .qr img
          src="http://www.classtools.net/QR/pics/qr.png" .ticket.inverse header
          .company-name American Airlines .gate div Gate div B4 section.airports
          .airport .airport-name Charlotte .airport-code CLT .dep-arr-label
          Departing .time 7:45am .airport .airport-name Tampa .airport-code TPA
          .dep-arr-label Arriving .time 9:15am section.place .place-block
          .place-label Group .place-value 2 .place-block .place-label Seat
          .place-value 2A .place-block .place-label Term .place-value B .qr img
          src="http://www.classtools.net/QR/pics/qr.png"
        </div> */}
      </div>
      <div className="main"></div>
    </>
  );
}
