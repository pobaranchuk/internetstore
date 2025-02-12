import { useEffect, useState } from 'react'
import { db } from '../../../firebase.ts'
import { collection, getDocs } from 'firebase/firestore'
import { ShopCard } from '@components/shopCards/ShopCard/ShopCard.tsx'

export type ShopCardData = {
  id:string
  name: string,
  description: string,
  price: number
}

export const ShopCardsMenu = () => {
  const [shopCards, setShopCard] = useState<ShopCardData[]>([])


  useEffect(() => {
    async function fetchProducts() {
      try {
        const querySnapshot = await getDocs(collection(db, 'ShopItems'))
        const productsList: ShopCardData[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data() as Omit<ShopCardData, "id"> }))
        setShopCard(productsList)
      } catch (error) {
        console.error('Error', error)
      }
    }

    fetchProducts()

  }, [])

  return (
    <>
      {shopCards?.map(shopCard => {
        return (
          <ShopCard shopCard={shopCard} key={shopCard.id} />
        )
      })}
    </>
  )
}

