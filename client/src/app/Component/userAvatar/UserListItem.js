import { Avatar } from "@chakra-ui/avatar";
import { Box, Text } from "@chakra-ui/layout";
import { useEffect } from "react";
import { useGlobalContext } from "../../UserContext/UserContext";

const UserListItem = ({ user, handleFunction }) => {
  // useEffect(() => {
  //   const userl = JSON.parse(localStorage.getItem("token"));
  //   console.log("my user", userl);
  // }, []);
  // const { user } = useGlobalContext();
  // console.log("user myyyy", user);

  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      w="100%"
      d="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name={user?.username}
        src={user?.image}
      />
      <Box>
        <Text>{user?.username}</Text>
        <Text fontSize="xs">
          <b>Email : </b>
          {user?.email}
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
