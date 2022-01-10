import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { MenuLink } from '../atoms/ButtonLink'

export const DrawerMenu = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <HamburgerIcon
        position="fixed"
        top="1rem"
        left="1rem"
        size="xl"
        ref={btnRef}
        onClick={onOpen}
      >
        Open
      </HamburgerIcon>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Flex direction="column">
              <MenuLink
                href="/"
                name="Top"
                buttonProps={{ onClick: onClose }}
              />
              <MenuLink
                href="/stage"
                name="Stage"
                buttonProps={{ onClick: onClose }}
              />
              <MenuLink
                href="/weapon"
                name="Weapon"
                buttonProps={{ onClick: onClose }}
              />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
