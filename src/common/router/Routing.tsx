import { Route, Routes } from 'react-router'
import { Login } from '@components/Login/Login.tsx'
import { HomePage } from '@components/HomePage/HomePage.tsx'
import { CardPage } from '@components/CardPage/CardPage.tsx'

export const RoutePath = {
  HomePage: '/',
  Login: '/Login',
  CardPage:"/card"
}as const

export const Routing = () => {
  return (
    <Routes>
      <Route path={RoutePath.HomePage} element={<HomePage/>}/>
      <Route path={RoutePath.Login} element={<Login/>}/>
      <Route path={RoutePath.CardPage} element={<CardPage/>}/>
    </Routes>
  )
}