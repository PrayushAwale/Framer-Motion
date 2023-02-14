import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
const EditForm = ({ setIsEditing }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addtask({
      name: "task",
      value,
      id: Date.now(),
      isCheckd: false,
    });
    setValue("");
  };

  return (
    <Center
      h={"100%"}
      w={"100%"}
      pos={"absolute"}
      bg={"rgba(0,0,0,0.5)"}
      zIndex={2}
      onClick={() => setIsEditing((prev) => !prev)}
    >
      <Box
        bg={"#2b3343"}
        p={"3rem 8rem"}
        borderRadius={"1rem"}
        boxShadow={"0 4px 4px 0 rgba(255,255,255,0.09)"}
      >
        <VStack spacing={"1.5rem"} align={"stretch"} mb={"1rem"} w={"25rem"}>
          <FormControl>
            <FormLabel>Edit the Task </FormLabel>
            <InputGroup>
              s
              <Input
                borderColor={"#fff"}
                value={value}
                autoFocus
                maxLength={50}
                //   onInput={(e) => setValue(e.target.value)}
              />
              <InputRightElement>
                <Button
                  borderRadius={"0 0.2rem 0.2rem 0"}
                  // onClick={handleSubmit}
                  color={"#2b3343"}
                >
                  +
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </VStack>
      </Box>
    </Center>
  );
};

export default EditForm;
