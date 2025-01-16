import { RiAccountBoxLine } from 'react-icons/ri'
import { IconWrapper } from './IconWrapperStyled.ts'
import { ICON_CONFIG } from './constants.ts'
import { useNavigate } from 'react-router'
import { RoutePath } from '@common/router/Routing.tsx'

export const AccountButton = () => {

  const navigate = useNavigate()

  const LoginHandler = () => navigate(RoutePath.Login)

  return (
    <IconWrapper>
      <RiAccountBoxLine {...ICON_CONFIG} onClick={LoginHandler} />
    </IconWrapper>
  )
}
