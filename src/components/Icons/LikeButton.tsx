import { IconWrapper } from './IconWrapperStyled.ts'
import { MdFavorite } from 'react-icons/md'
import { ICON_CONFIG } from './IconConfig.ts'

export const LikeButton = () => {
  return (
    <IconWrapper>
      <MdFavorite {...ICON_CONFIG} />
    </IconWrapper>
  )
}
