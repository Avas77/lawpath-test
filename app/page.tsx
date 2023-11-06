import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Image,
  NumberInput,
  Paper,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import travel from "../public/travel.jpeg";
import NextImage from "next/image";

export default function Home() {
  return (
    <Box h="100vh">
      <Flex m="10rem" justify="center">
        <Flex
          style={{
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        >
          <Box>
            <Image
              src={travel}
              alt="Travel pic"
              component={NextImage}
              w={400}
              h={522}
              style={{
                objectPosition: "bottom",
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
              }}
            />
          </Box>
          <Paper
            p={"2rem"}
            style={{
              border: "1px solid #E6E9F0",
              borderTopRightRadius: "8px",
              borderBottomRightRadius: "8px",
            }}
          >
            <Title mb="2rem">Enter your Address Details</Title>
            <form>
              <Stack>
                <NumberInput label="Enter Postcode" />
                <TextInput label="Enter Suburb" />
                <TextInput label="Enter State" />
              </Stack>
              <Flex justify="flex-end">
                <Button ml="auto" mt="2rem">
                  Send
                </Button>
              </Flex>
            </form>
          </Paper>
        </Flex>
      </Flex>
    </Box>
  );
}
