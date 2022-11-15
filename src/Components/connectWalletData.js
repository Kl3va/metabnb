//ICONS AND IMAGES
import iconClose from 'Assets/xclose.png'
import iconExtend from 'Assets/extend.png'
import iconWallet from 'Assets/wallet.png'
import iconWolf from 'Assets/wolf.png'

export const connectData = {
  heading: 'Connect Wallet',
  closeIcon: iconClose,
  text: 'Choose your preferred wallet:',
  preferrence: [
    {
      logoIcon: iconWolf,
      iconName: 'Metamask',
      extendIcon: iconExtend,
      alt: 'image of a wolf head',
    },
    {
      logoIcon: iconWallet,
      iconName: 'WalletConnect',
      extendIcon: iconExtend,
      alt: 'image of the connect logo',
    },
  ],
}
