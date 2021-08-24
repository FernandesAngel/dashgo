import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
export function Profile(){
  return (
    <Flex align="center">
      <Box
        mr="4"
        textAlign="right"
      >
        <Text>Angel Fernandes</Text>
        <Text
          color="gray.300"
          fontSize="small"
        >legnafernandes@gmail.com</Text>
      </Box>
      <Avatar size="md" name="Angel Fernandes" src="https://github.com/fernandesangel.png" />
    </Flex>
  )
}
