import './styles/footer.css'
import Image from 'next/image'
import Innovate from './Logos/Innovate.svg'
import LinkedIn from './Logos/LinkedIN.svg'
import FaceBook from './Logos/FaceBook.svg'
import Instagram from './Logos/Instagram.svg'
import Youtube from './Logos/Youtube.svg'

const footer = () => {
  return (
    <div className='Footer__wrapper'>
      <div className='Footer_Content_wrapper'>
        <div>
          <div>
              <Image className='Innovate' src={Innovate} alt='Innovate'/>
          </div>
          {/* <div>
            <p className='Content_heading'>Important Resources</p>
            <p>View Our Programs</p>
            <p>Free Internship Program</p>
            <p>Upcoming Workshops</p>
            <button>Pre Register Now</button>
          </div> */}
          <div>
            <p className='Content_heading'>Legal & Policies</p>
            <p>Privacy</p>
            <p>Terms and Service</p>
            <p>Support</p>
          </div>

        </div>
        <div>  </div>
        <div>
            <h5>© RABLO LEARNING PVT LTD. ALL RIGHT RESERVERD</h5>
            <div className='Social_Icons'>
              <Image className='icons' src={LinkedIn} alt='LinkedIn'/>
              <Image className='icons' src={FaceBook} alt='FaceBook' />
              <Image className='icons' src={Instagram} alt='Instagram'/>
              <Image className='icons' src={Youtube} alt='Youtube' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default footer