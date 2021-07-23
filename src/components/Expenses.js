import './Expenses.css';
import ExpenseItem from './ExpenseItem';

export const Expenses = ({ expenses }) => (
    <div className='expenses'>
        {expenses.map((expense) => (
            <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))}
    </div>
);