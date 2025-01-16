import { IconWrapper } from './IconWrapperStyled.ts'
import { MdFavorite } from 'react-icons/md'
import { ICON_CONFIG } from './constants.ts'

export const LikeButton = () => {
  return (
    <IconWrapper>
      <MdFavorite {...ICON_CONFIG} />
    </IconWrapper>
  )
}
