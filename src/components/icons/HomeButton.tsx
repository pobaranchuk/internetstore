import { FaShop } from 'react-icons/fa6'
import { IconWrapper } from '../IconWrapper.tsx'
import { animateScroll as scroll } from 'react-scroll'

export const HomeButton = () => {
  return (
    <IconWrapper
      onClick={() => {
        scroll.scrollToTop()
      }}
    >
      <FaShop size={'24px'} color={'Magenta'} />
    </IconWrapper>
  )
}
