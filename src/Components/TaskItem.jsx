import { Checkbox, Flex, IconButton, Spacer } from "@chakra-ui/react";
import React, { memo } from "react";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const TaskItem = memo(
  ({
    value,
    isCheckd,
    id,
    deleteTask,
    checkTask,
    setIsEditing,
    updateTaskFunction,
    setPrevElement,
  }) => {
    const MotionFlex = motion(Flex);

    const [isChecked, setIsChecked] = useState(isCheckd);
    const handleCheckBox = () => {
      setIsChecked(!isChecked);
      checkTask(id);
    };
    return (
      <MotionFlex
        bg={"#3d4659"}
        p={"1rem"}
        borderRadius={"0.7rem"}
        align={"center"}
        gap={"0.7rem"}
        textDecoration={isChecked ? "line-through" : "none"}
        mb={"1rem"}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 1, scale: 0 }}
        layout
      >
        <Checkbox isChecked={isChecked} onChange={handleCheckBox} />
        {value}
        <Spacer />
        <IconButton
          onClick={() => {
            setIsEditing((prev) => !prev);
            updateTaskFunction(id);
            setPrevElement(() => document.activeElement);
          }}
          color={"black"}
          icon={<BiEdit />}
          _focus={{ outline: "2px solid #fff", outlineOffset: "0.2rem" }}
        />
        <IconButton
          onClick={() => deleteTask(id)}
          color={"red"}
          icon={<FaTrashAlt />}
        />
      </MotionFlex>
    );
  },
  (next, prev) => next.value === prev.value
);

export default TaskItem;
