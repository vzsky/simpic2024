import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { 
  Flex, Heading, Box, useDisclosure, IconButton, Collapse, useBreakpointValue, Drawer, DrawerOverlay, DrawerContent, Center, Button, Text
} from '@chakra-ui/react'
import { Session } from 'next-auth'
import { signOut, useSession } from "next-auth/react"
import Image from 'next/image'
import Link from 'next/link'

const colors = {
  bg: "",
  border: "green.900",
  hover: "green.900",
  icon: "green"
}


type StackLinkProps = {
  href?: string
  onClick?: (_: any) => (any)
  children?: React.ReactElement | string
}
export const StackLink = ({children, href, onClick}:StackLinkProps) => {
  const hoverBg = useBreakpointValue({
    base: colors.hover, 
    sm:   colors.hover, 
    md:   "" 
  }) 
  return (
    <Flex
      direction="row"
      height={[10, 10, "30px"]}
      _hover={{bg: hoverBg}}
      borderTop={['1px', '1px', '0px']}
      borderTopColor={[colors.border, colors.border]}
      justifyContent={["center"]}
      alignContent={["center"]}
      onClick={onClick}
      px={2}
    >
      <Center>
        <Link href={href?href:"#"}>
          <Text whiteSpace={"nowrap"}> {children} </Text>
        </Link>
      </Center>
    </Flex>
  )
}

const LoginLink = () => {
  const { status } = useSession()
  if (status == "authenticated")
    return <StackLink onClick={signOut}> Sign Out </StackLink>
  return <StackLink href={'/auth/signin'}> Sign In </StackLink> 
}

const HomeLink = () => {
  const { status } = useSession()
  if (status == "authenticated") 
    return <StackLink href="/user"> Home </StackLink>
  return <StackLink href="/"> Home </StackLink>
}

const NavStack = () => (
  <Flex direction={['column', 'column', 'row']}>
    <HomeLink />
    <StackLink href={'/about'}>   About </StackLink>
    <StackLink href={'/program'}> Program </StackLink>
    <StackLink href={'/contact'}> Contact </StackLink>
    <LoginLink />
  </Flex>
)

const Welcome = () => {
  const { status, data } = useSession()
  const getName = (data: Session) => {
    if (!data.user) return "user"
    if (data.user.name) return data.user.name
    return data.user.email
  }
  if (status == "authenticated" && data && data.user) return (
    <Center>
      <Text ml={0} mt={0} fontSize={"13"}> Welcome, {getName(data)} </Text>
    </Center>
  )
  return <> </>
}
 
const Navbar = () => {
  const { onToggle, isOpen } = useDisclosure()

  return (
    <Box bg={colors.bg} >
      <Flex 
        position="relative"
        zIndex={100}
        w="100%" 
      >
        <Flex
          position="relative"
          w="100%"
          px={[3, 3,6]}
          py={5}
          align="center"
          justify={"space-between"}
        >
          <Flex 
            position={"static"}
          >
            <Link href='/'>
              <Image src={"/logo.png"} alt={''} width={50} height={50} />
            </Link>
            <Link href='/'>
              <Heading ml={[1, 2, 5]} fontSize={[30]}>
                SIMPIC 2024
              </Heading>
              <Welcome />
            </Link>
          </Flex>

          <Box display={["block", "block", "none"]}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'link'}
              colorScheme={colors.icon}
              aria-label={'Toggle Navigation'}
            />
          </Box>

          <Box display={["none", "none", "block"]}>
            <NavStack/>
          </Box>
        </Flex>
      </Flex>

      <Box>
        <Box display={["block", "block", "none"]}>
          <Collapse in={isOpen} animateOpacity={false}>
            <Box position="relative" zIndex={100}>
              <NavStack />
            </Box>
          </Collapse>
        </Box>
      </Box>
      
    </Box>
  );
}

export default Navbar
