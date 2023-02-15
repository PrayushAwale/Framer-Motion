import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import TaskList from "./TaskList";
const CustomForm = ({
  addtask,
  task,
  deleteTask,
  checkTask,
  setIsEditing,
  updateTaskFunction,
  setPrevElement,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      setErrorMessage("Please Enter A valid String");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
      return;
    } else {
      setErrorMessage("");
    }
    addtask({
      name: "task1",
      value,
      id: Date.now(),
      isCheckd: false,
    });
    setValue("");
  };

  return (
    <Box
      bg={"#2b3343"}
      p={"2rem 8rem"}
      borderRadius={"1rem"}
      boxShadow={"0 4px 4px 0 rgba(255,255,255,0.09)"}
      transition={"ease-in-out"}
    >
      <VStack spacing={"1.5rem"} align={"stretch"} mb={"1rem"} w={"25rem"}>
        <Heading>My Task List</Heading>
        <FormControl onSubmit={handleSubmit}>
          <FormLabel>What's your "One Thing"? </FormLabel>
          <InputGroup>
            s
            <Input
              borderColor={"#fff"}
              value={value}
              autoFocus
              maxLength={50}
              onInput={(e) => setValue(e.target.value)}
              type={"text"}
              errorBorderColor="crimson"
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
          <FormHelperText color={"red"}>{errorMessage}</FormHelperText>
        </FormControl>
      </VStack>

      <TaskList
        task={task}
        deleteTask={deleteTask}
        checkTask={checkTask}
        setIsEditing={setIsEditing}
        updateTaskFunction={updateTaskFunction}
        setPrevElement={setPrevElement}
      />
    </Box>
  );
};

export default CustomForm;
