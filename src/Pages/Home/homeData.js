//Image Assets
import heroImg from 'Assets/hero.png'
import metaverse0 from 'Assets/Frame-151.png'
import metaverse1 from 'Assets/Frame-151-1.png'
import metaverse2 from 'Assets/Frame-151-2.png'
import metaverse3 from 'Assets/Frame-151-3.png'
import metaverse4 from 'Assets/Frame-151-4.png'
import metaverse5 from 'Assets/Frame-151-5.png'
import metaverse6 from 'Assets/Frame-151-6.png'
import metaverse7 from 'Assets/Frame-151-7.png'
import metaverse8 from 'Assets/Frame-151-8.png'
import metaverse9 from 'Assets/Frame-151-9.png'
import metaverse10 from 'Assets/Frame-151-10.png'
import metaverse11 from 'Assets/Frame-151-11.png'
import metaverse12 from 'Assets/Frame-151-12.png'
import metaverse13 from 'Assets/Frame-151-13.png'
import metaverse14 from 'Assets/Frame-151-14.png'
import metaverse15 from 'Assets/Frame-151-15.png'
import star from 'Assets/Star-2.png'
import callToImg from 'Assets/Frame-59546nfts.png'

//Partner15
import mbToken from 'Assets/mbtoken.png'
import metamask from 'Assets/metamask.png'
import opensea from 'Assets/opensea.png'

export const homeProps = {
  heroText:
    'we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone',
  heroImg: heroImg,
  secondaryHeader: 'Inspiration for your next adventure',
  imgAlt: 'building for rent',
  buildingName: 'Desert king',
  value: '1MBT per night',
  distance: '2345km away',
  availability: 'available for 2weeks stay',
  partners: [
    {
      img: mbToken,
      alt: 'icon representing mbtoken',
    },
    { img: metamask, alt: 'icon representing metamask' },
    {
      img: opensea,
      alt: 'icon representing opensea',
    },
  ],
  inputs: {
    placeholder: 'Search for location',
    btnSearch: 'Search',
  },
  callToAction: {
    heading: 'Metabnb NFTs',
    text: 'Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.',
    btnText: 'Learn more',
    img: callToImg,
  },
  rating: [star, star, star, star, star],
  featuresImgs: [
    metaverse0,
    metaverse1,
    metaverse2,
    metaverse3,
    metaverse4,
    metaverse5,
    metaverse6,
    metaverse7,
    metaverse8,
    metaverse9,
    metaverse10,
    metaverse11,
    metaverse12,
    metaverse13,
    metaverse14,
    metaverse15,
  ],
}
