import { RiAccountBoxLine } from 'react-icons/ri'
import { IconWrapper } from './IconWrapperStyled.ts'
import { ICON_CONFIG } from './IconConfig.ts'
import { useNavigate } from 'react-router'
import { RoutePath } from '@common/router/Routing.tsx'

export const AccountButton = () => {

  let navigate = useNavigate();

  const LoginHandler = () => {
    return navigate(RoutePath.Login)
  }
  return (
    <IconWrapper>
      <RiAccountBoxLine {...ICON_CONFIG} onClick={LoginHandler}/>
    </IconWrapper>
  )
}
