import { Button } from '@chakra-ui/react'
import NextLink from 'next/link'

export const MenuLink = (props: {
  href: string
  name: string
}): JSX.Element => {
  const { href, name } = props

  return (
    <NextLink href={href} passHref>
      <Button w="full">{name}</Button>
    </NextLink>
  )
}
