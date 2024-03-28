import { Avatar } from "@chakra-ui/avatar";
import { Tooltip } from "@chakra-ui/tooltip";
import ScrollableFeed from "react-scrollable-feed";
import { isLastMessage, isSameSender, isSameSenderMargin, isSameUser,} from "../../config/ChatLogics";
import { useGlobalContext } from "../../UserContext/UserContext";

const ScrollableChat = ({ messages }) => {
  const { user } = useGlobalContext();
  console.log(user, "user1234690-098765");

  return (
    <ScrollableFeed>
      {messages &&
        messages.map((m, i) => (
          <div style={{ display: "flex" }} key={m._id}>
            {(isSameSender(messages, m, i, user?._id) ||
              isLastMessage(messages, i, user?._id)) && (
              <Tooltip label={m.sender?.firstName} placement="bottom-start" hasArrow>
                <Avatar
                  mt="7px"
                  mr={1}
                  size="sm"
                  cursor="pointer"
                  name={m.sender?.firstName}
                  src={m.sender?.image}
                />
              </Tooltip>
            )}
            <span className=" text-white"
              style={{
                backgroundColor: `${
                  m.sender._id === user?._id ? "#227a38" : "#3f413f"
                }`,
                marginLeft: isSameSenderMargin(messages, m, i, user?._id),
                marginTop: isSameUser(messages, m, i, user?._id) ? 3 : 10,
                borderRadius: "12px",
                padding: "5px 15px",
                maxWidth: "75%",
              }}
            >
              {m.content}
            </span>
          </div>
        ))}
    </ScrollableFeed>
  );
};

export default ScrollableChat;
