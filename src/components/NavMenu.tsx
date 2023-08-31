import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Flex,
  Box,
  Text,
  useColorMode,
  Switch,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const NavMenu = ({ isOpen, onClose }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#FFF", "#090D1F");

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody bg={bg}>
            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"100%"}
              gap={"20px"}
              fontSize={"18px"}
            >
              <Text fontSize="xl" fontWeight="bold" mb={6}>
                Ahmed Karam
              </Text>
              <Box onClick={onClose}>
                <Link href="/">Home</Link>
              </Box>
              <Box onClick={onClose}>
                <Link href="/add-post">Add post</Link>
              </Box>
              <Box onClick={onClose}>
                <Link href="#">Services</Link>
              </Box>
              <Box onClick={onClose}>
                <Link href="#">Contact</Link>
              </Box>

              <Flex alignItems="center" ml={"4"}>
                {colorMode === "dark" ? (
                  <MoonIcon boxSize={4} mr={2} />
                ) : (
                  <SunIcon boxSize={4} mr={2} />
                )}
                <Switch
                  colorScheme="black"
                  isChecked={colorMode === "dark"}
                  onChange={toggleColorMode}
                  size="md"
                />
              </Flex>
            </Flex>
            <CloseIcon
              position={"absolute"}
              bottom={0}
              left={"50%"}
              mb={4}
              cursor={"pointer"}
              onClick={onClose}
            />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default NavMenu;
