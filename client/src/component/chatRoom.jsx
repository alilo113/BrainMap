import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

export function Chatroom() {
  const frameworks = [
    "React",
    "Solid",
    "Vue",
    "Angular",
    "Svelte",
    "Preact",
    "Qwik",
    "Lit",
    "Alpine.js",
    "Ember",
    "Next.js",
  ];

  const [search, setSearch] = useState("");
  const filtered = frameworks.filter((fw) =>
    fw.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box display="flex" flexDirection="column" height="100vh" bg="#353541">
      {/* Messages */}
      <Box m={2}>
        <Box color="white" fontWeight="bold">
          Message 1
        </Box>
        <Box color="white" fontWeight="bold">
          Message 2
        </Box>
      </Box>

      {/* Form */}
      <Box
        as="form"
        display="flex"
        alignItems="center"
        mt="auto"
        mb={3}
        px={2}
      >
        {/* Search Dropdown */}
        <Menu isOpen={search.length > 0}>
          <MenuButton
            as={Input}
            placeholder="Type to search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            bg="#3f414e"
            color="white"
            _placeholder={{ color: "gray.400" }}
            borderRadius="md"
            mr={2}
          />
          {filtered.length > 0 && (
            <MenuList>
              {filtered.map((fw, i) => (
                <MenuItem key={i} onClick={() => setSearch(fw)}>
                  {fw}
                </MenuItem>
              ))}
            </MenuList>
          )}
        </Menu>

        {/* Message input */}
        <Input
          flex="1"
          placeholder="Type your message..."
          bg="#3f414e"
          color="white"
          _placeholder={{ color: "gray.400" }}
          borderRadius="md"
          mr={2}
        />

        {/* Send button */}
        <Button colorScheme="blue">Send</Button>
      </Box>
    </Box>
  );
}