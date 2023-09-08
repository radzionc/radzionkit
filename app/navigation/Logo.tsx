import { Path } from './Path'
import Link from 'next/link'
import { ProductLogo } from 'product/ProductLogo'

export const Logo = () => {
  return (
    <Link href={Path.Home}>
      <ProductLogo />
    </Link>
  )
}
