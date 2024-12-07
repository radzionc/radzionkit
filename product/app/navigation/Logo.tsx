import { ProductLogo } from '../product/ProductLogo'
import { Path } from './Path'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href={Path.Home}>
      <ProductLogo />
    </Link>
  )
}
