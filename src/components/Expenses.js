import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import { Card } from "./Card";

export const Expenses = ({ expenses }) => (
  <Card className="expenses">
    {expenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
  </Card>
);
