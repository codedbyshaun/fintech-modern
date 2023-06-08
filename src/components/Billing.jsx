import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt='billing icon' className='w-[100%] h-[100%] 
        relative z-[5]' />

      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />

    </div>

    <div className={layout.sectioninfo}>
      <h2 className={styles.heading2}>Effortlessly control your <br className='sm:block hidden' /> billing & invoicing</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Create and send professional invoices in minutes, with customizable templates and branding. Track and manage your invoices online. 
      Accept payments and sync with your accounting software. PayFi helps you get paid faster and simpler.
      </p>

      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img src={apple} alt="apple_store_link"
          className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
        />
        <img src={google} alt="google_play_link"
          className='w-[128px] h-[42px] object-contain cursor-pointer'
        />
      </div>
    </div>

  </section>
)


export default Billing