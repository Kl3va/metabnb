//logo for footer section
import logoFooter from 'Assets/Groupfooter.png'
import logo from 'Assets/Groupmetalogo.png'

//Social icons
import instagram from 'Assets/instagram.png'
import twitter from 'Assets/Vectortwitter.png'
import facebook from 'Assets/Vectorfacebook.png'
import copyright from 'Assets/Vectorcopyright.png'

//Icon for closing tab
import hamburger from 'Assets/icon-hamburger.svg'
import close from 'Assets/closeit-icon.png'

export const reuseData = {
  btnMore: 'Learn more',
  navbar: {
    logo: logo,
    iconOpen: hamburger,
    iconClose: close,
    btnConnect: 'Connect wallet',
    navLinks: [
      { link: '/', text: 'Home' },
      { link: '/places', text: 'Place to stay' },
      { link: '#', text: 'NFTs' },
      { link: '#', text: 'Community' },
    ],
  },
  footer: {
    footerLogo: logoFooter,
    copyrightText: '2022 Metabnb',
    copyright: copyright,
    footerSocials: [facebook, instagram, twitter],
    footerLinks: [
      'Community',
      'Places',
      'About us',
      'NFT',
      'Castle',
      'Road map',
      'Tokens',
      'Farms',
      'Creators',
      'Landlords',
      'Beach',
      'Career',
      'Discord',
      'Learn more',
      'Contact us',
    ],
  },
}
