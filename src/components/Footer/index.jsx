import './footer.scss'
import { Logo } from '../Logo'


function Footer() {

  return (
      <>
        <footer>
          <div className='componentFooterLogo'>
            <Logo />
          </div>
          <p className='pFooter'>© 2020 Kasa. All rights reserved</p>
        </footer>
      </>
  )
}

export default Footer