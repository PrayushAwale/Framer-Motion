import React, { useState } from "react";
import { Center, useToast } from "@chakra-ui/react";
import CustomForm from "./CustomForm";
import EditForm from "./EditForm";
import { AnimatePresence } from "framer-motion";

const Body = () => {
  const toast = useToast();

  const [task, setTask] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [updateTask, setUpdateTask] = useState(null);
  const addtask = (value) => {
    setTask((prev) => [...prev, value]);
    toast({
      title: "New Task Added",
      description: "A new task has been added to the list",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "bottom-right",
    });
  };

  const updateTaskFunction = (id) => {
    setUpdateTask(task.find((item) => item.id === id));
  };

  const deleteTask = (id) => {
    setTask(task.filter((item) => item.id !== id));
    toast({
      title: "Task Deleted",
      description: "The task has been deleted from the list",
      status: "info",
      duration: 3000,
      isClosable: true,
      position: "bottom-right",
    });
  };

  const checkTask = (id) => {
    setTask((prevState) => {
      return prevState.map((t) => {
        return t.id === id ? { ...t, isCheckd: !t.isCheckd } : t;
      });
    });
  };

  const taskUpdater = (updateTask) => {
    setTask((prevState) => {
      return prevState.map((t) => {
        return t.id === updateTask.id ? { ...t, value: updateTask.value } : t;
      });
    });
  };

  return (
    <Center h={"100vh"} bg={"#222834"} color={"#fff"}>
      <AnimatePresence>
        {isEditing && (
          <EditForm
            setIsEditing={setIsEditing}
            updateTask={updateTask}
            taskUpdater={taskUpdater}
          />
        )}
      </AnimatePresence>

      <CustomForm
        addtask={addtask}
        task={task}
        deleteTask={deleteTask}
        checkTask={checkTask}
        setIsEditing={setIsEditing}
        updateTaskFunction={updateTaskFunction}
      />
    </Center>
  );
};

export default Body;
