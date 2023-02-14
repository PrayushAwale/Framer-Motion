import { Text, VStack, StackDivider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ task, deleteTask, checkTask, setIsEditing }) => {
  if (!task.length) {
    return (
      <Text textAlign={"center"} fontSize={"0.8rem"}>
        Nothing to show
      </Text>
    );
  }
  return (
    <VStack
      align={"stretch"}
      divider={<StackDivider borderColor="gray.200" />}
      maxH={"15rem"}
      overflowY={"auto"}
      overflowX={"hidden"}
    >
      <AnimatePresence>
        {task
          .sort((a, b) => b.id - a.id)
          .map((item) => (
            <TaskItem
              key={item.id}
              {...item}
              deleteTask={deleteTask}
              checkTask={checkTask}
              setIsEditing={setIsEditing}
            />
          ))}
      </AnimatePresence>
    </VStack>
  );
};

export default TaskList;
