import Link from 'next/link'

import { ProductLogo } from '../product/ProductLogo'

import { Path } from './Path'

export const Logo = () => {
  return (
    <Link href={Path.Home}>
      <ProductLogo />
    </Link>
  )
}
