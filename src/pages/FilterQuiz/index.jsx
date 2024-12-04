import {
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

const FilterQuiz = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '16px' }}>
      <Button fullWidth variant="outlined" color="secondary">
        Select Category
      </Button>
      <Menu>
        <MenuItem>Category 1</MenuItem>
        <MenuItem>Category 2</MenuItem>
        <MenuItem>Category 3</MenuItem>
      </Menu>

      <Button fullWidth variant="outlined" style={{ marginTop: '16px' }} color="secondary">
        Select Difficulty
      </Button>
      <Menu>
        <MenuItem>Easy</MenuItem>
        <MenuItem>Medium</MenuItem>
        <MenuItem>Hard</MenuItem>
      </Menu>

      <Button fullWidth variant="contained" color="secondary" style={{ marginTop: '16px' }}>
        Start Quiz
      </Button>
    </div>
  );
};

export default FilterQuiz;
