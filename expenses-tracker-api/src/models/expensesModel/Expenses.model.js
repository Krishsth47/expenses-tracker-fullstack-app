import ExpensesSchema from "./Expenses.schema.js";

//CRUD
//expense must be an object
export const createExpenses = (expense) => {
  return ExpensesSchema.create(expense);
};

//filter must be an object that should atleast contain the user ID
export const getExpenses = (filter) => {
  return ExpensesSchema.find(filter);
};

//filter must be an object that should atleast contain the user ID and expenses ID
export const deleteExpense = (filter) => {
  return ExpensesSchema.findOneAndDelete(filter);
};
