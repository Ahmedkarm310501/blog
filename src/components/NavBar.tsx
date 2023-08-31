import {
  Box,
  Flex,
  Text,
  useColorMode,
  Switch,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import NavMenu from "./NavMenu";
import Link from "next/link";
const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      px={{ base: 4, md: 6, lg: 20 }}
    >
      <Text fontSize="xl" fontWeight="bold">
        Ahmed Karam
      </Text>

      <Flex alignItems="center" display={{ base: "none", md: "flex" }}>
        <Box>
          <Box
            as="span"
            ml={3}
            _hover={{
              borderBottom: "1px solid black",
            }}
          >
            <Link href="/">Home</Link>
          </Box>
          <Box
            as="span"
            ml={3}
            _hover={{
              borderBottom: "1px solid black",
            }}
          >
            <Link href="/add-post">Add post</Link>
          </Box>
          <Box
            as="span"
            ml={3}
            _hover={{
              borderBottom: "1px solid black",
            }}
          >
            <Link href="#">About</Link>
          </Box>
          <Box
            as="span"
            ml={3}
            _hover={{
              borderBottom: "1px solid black",
            }}
          >
            <Link href="#">Contact</Link>
          </Box>
        </Box>

        <Flex alignItems="center" ml={"4"}>
          {colorMode === "dark" ? (
            <MoonIcon boxSize={4} mr={2} />
          ) : (
            <SunIcon boxSize={4} mr={2} />
          )}
          <Switch
            isChecked={colorMode === "dark"}
            onChange={toggleColorMode}
            size="lg"
          />
        </Flex>
      </Flex>

      <Box
        display={{ base: "block", md: "none" }}
        cursor={"pointer"}
        onClick={onOpen}
      >
        <HamburgerIcon boxSize={6} />
      </Box>
      <NavMenu isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default NavBar;
