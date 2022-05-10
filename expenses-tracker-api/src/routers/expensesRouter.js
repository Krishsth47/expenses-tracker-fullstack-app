import express from "express";
import { createExpenses } from "../models/expensesModel/Expenses.model.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the expenses API get",
  });
});
router.post("/", async (req, res) => {
  try {
    const { authorization } = req.headers;

    console.log(req.body);
    const result = await createExpenses({ ...req.body, userId: authorization });

    result?._id
      ? res.json({
          status: "success",
          message: "Expense created successfully",
        })
      : res.json({
          status: "error",
          message: "Error creating expense, try again later",
        });
  } catch (error) {
    console.log(error);

    res.json({
      status: "error",
      message: error.message,
    });
  }

  res.json({
    message: "Welcome to the expenses API post",
  });
});
router.delete("/", (req, res) => {
  res.json({
    message: "Welcome to the expenses API delete",
  });
});

export default router;
