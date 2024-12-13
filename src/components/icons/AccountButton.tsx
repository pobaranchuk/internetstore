import { RiAccountBoxLine } from 'react-icons/ri'
import { IconWrapper } from '../IconWrapper.tsx'
import { ICON_CONFIG } from './IconConfig.ts'

export const AccountButton = () => {
  return (
    <IconWrapper>
      <RiAccountBoxLine {...ICON_CONFIG} />
    </IconWrapper>
  )
}
