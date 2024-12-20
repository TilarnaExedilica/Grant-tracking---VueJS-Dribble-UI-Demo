import logo from '@/assets/images/logo.png'
import dribbleAuthor from '@/assets/images/dribble_author.png'

interface SocialLink {
  icon: string
  text: string
  url?: string
}

interface SplashConfigType {
  enable_splash: boolean
  title: string
  logoPath: string
  logoHeight: number
  socialLinks: SocialLink[]
  uiCredit: string
  uiCreditName: string
  uiCreditImagePath: string
}

const getImageUrl = (image: any): string => {
  return typeof image === 'string' ? image : image.default || image
}

export const SplashConfig: SplashConfigType = {
  enable_splash: true,
  title: 'by Tilarna',
  logoPath: getImageUrl(logo),
  logoHeight: 150,
  socialLinks: [
    {
      icon: 'brands fa-github',
      text: 'TilarnaExdilika',
      url: 'https://github.com/TilarnaExdilika',
    },
    {
      icon: 'brands fa-discord',
      text: '_tilarna',
      url: 'https://discord.com/_tilarna',
    },
    {
      icon: 'brands fa-facebook-messenger',
      text: 'IShino.Avery',
      url: 'https://m.me/IShino.Avery',
    },
  ],
  uiCredit: 'UI Design by',
  uiCreditName: 'George Lov',
  uiCreditImagePath: getImageUrl(dribbleAuthor),
}
