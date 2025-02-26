import { IconWrapper } from './IconWrapperStyled.ts'
import { FaCartShopping } from 'react-icons/fa6'
import { ICON_CONFIG } from './constants.ts'

export const BaskedButton = () => {
  return (
    <IconWrapper>
      <FaCartShopping {...ICON_CONFIG} />
    </IconWrapper>
  )
}
