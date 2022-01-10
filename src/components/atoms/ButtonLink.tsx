import { Button, ButtonProps } from '@chakra-ui/react'
import NextLink from 'next/link'

export const MenuLink = (props: {
  href: string
  name: string
  buttonProps: ButtonProps
}): JSX.Element => {
  const { href, name, buttonProps } = props

  return (
    <NextLink href={href} passHref>
      <Button w="full" {...buttonProps}>
        {name}
      </Button>
    </NextLink>
  )
}
