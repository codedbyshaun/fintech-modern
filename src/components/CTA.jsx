import styles from "../style"
import Button from "./Button"

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding}
    sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Explore the options now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>PayFi is the ultimate fintech platform, giving you convenience, security, innovation, and rewards. PayFi is more than fintech. It’s finlife. 
      Don’t miss out. Join PayFi today and transform your financial journey.</p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
)


export default CTA
