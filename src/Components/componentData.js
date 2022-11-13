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

export const reuseData = {
  btnMore: 'Learn more',
  navbar: {
    logo: logo,
    iconOpen: hamburger,
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
      'NFT',
      'Tokens',
      'Landlords',
      'Discords',
      'Places',
      'Castle',
      'Farms',
      'Beach',
      'Learn more',
      'About us',
      'Road map',
      'Creators',
      'Career',
      'Contact us',
    ],
  },
}
