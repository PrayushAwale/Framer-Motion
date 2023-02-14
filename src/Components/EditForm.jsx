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
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
const EditForm = ({ setIsEditing, updateTask, taskUpdater }) => {
  const { value: toUpdateTask, id } = updateTask;
  const MotionBox = motion(Box);
  const [value, setValue] = useState(toUpdateTask);
  const handleSubmit = (e) => {
    e.preventDefault();
    taskUpdater({
      name: "task1",
      value,
      id,
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
      <AnimatePresence>
        <MotionBox
          bg={"#2b3343"}
          p={"3rem 8rem"}
          borderRadius={"1rem"}
          boxShadow={"0 4px 4px 0 rgba(255,255,255,0.09)"}
          //   initial={{ opacity: 0, scale: 0 }}
          //   animate={{ opacity: 1, scale: 1 }}
          //   exit={{ opacity: 0, scale: 0 }}
          //   layout
        >
          <VStack spacing={"1.5rem"} align={"stretch"} mb={"1rem"} w={"25rem"}>
            <FormControl>
              <FormLabel>Edit the Task </FormLabel>
              <InputGroup>
                <Input
                  borderColor={"#fff"}
                  value={value}
                  autoFocus
                  maxLength={50}
                  onInput={(e) => setValue(e.target.value)}
                />
                <InputRightElement>
                  <Button
                    borderRadius={"0 0.2rem 0.2rem 0"}
                    onClick={handleSubmit}
                    color={"#2b3343"}
                  >
                    +
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </VStack>
        </MotionBox>
      </AnimatePresence>
    </Center>
  );
};

export default EditForm;
