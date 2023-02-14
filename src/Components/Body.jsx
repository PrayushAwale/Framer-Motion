import React, { useState } from "react";
import { Center } from "@chakra-ui/react";
import CustomForm from "./CustomForm";
import EditForm from "./EditForm";

const Body = () => {
  const [task, setTask] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const addtask = (value) => {
    setTask((prev) => [...prev, value]);
  };

  const deleteTask = (id) => {
    setTask(task.filter((item) => item.id !== id));
  };

  const checkTask = (id) => {
    setTask((prevState) => {
      return prevState.map((t) => {
        return t.id === id ? { ...t, isCheckd: !t.isCheckd } : t;
      });
    });
  };

  return (
    <Center h={"100vh"} bg={"#222834"} color={"#fff"}>
      {isEditing && <EditForm setIsEditing={setIsEditing} />}

      <CustomForm
        addtask={addtask}
        task={task}
        deleteTask={deleteTask}
        checkTask={checkTask}
        setIsEditing={setIsEditing}
      />
    </Center>
  );
};

export default Body;
