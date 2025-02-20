import './footer.scss'
import { LogoFooter } from '../Logo'


function Footer() {

  return (
      <>
        <footer>
          <div className='componentFooterLogo'>
            <LogoFooter />
          </div>
          <p className='pFooter'>© 2020 Kasa. All rights reserved</p>
        </footer>
      </>
  )
}

export default Footer