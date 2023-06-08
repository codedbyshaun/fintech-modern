import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal
        <br className="sm:block hidden" /> in a few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-5`}> PayFi has a card for everyone. 
      Low-interest, high-cashback, flexible-credit. Compare and apply online. No hassle, no fees. 
      Switch to PayFi and save.</p>

      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card_comparison" classname="w-[100%] h-[100%]" />

    </div>

  </section>
)


export default CardDeal
