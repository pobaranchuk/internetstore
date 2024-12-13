import { FaShop } from 'react-icons/fa6'
import { IconWrapper } from '../IconWrapper.tsx'
import { animateScroll as scroll } from 'react-scroll'
import { ICON_CONFIG } from './IconConfig.ts'

export const HomeButton = () => {
  return (
    <IconWrapper
      onClick={scroll.scrollToTop}
    >
      <FaShop {...ICON_CONFIG} />
    </IconWrapper>
  )
}
