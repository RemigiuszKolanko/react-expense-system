import './Expenses.css';
import ExpenseItem from './ExpenseItem';

export const Expenses = ({ expenses }) => (
    <div className='expenses'>
        <h2>Let's get started!</h2>
        <ExpenseItem
            title={expenses[0].title}
            amount={expenses[0].amount}
            date={expenses[0].date}
        />
        <ExpenseItem
            title={expenses[1].title}
            amount={expenses[1].amount}
            date={expenses[1].date}
        />
        <ExpenseItem
            title={expenses[2].title}
            amount={expenses[2].amount}
            date={expenses[2].date}
        />
        <ExpenseItem
            title={expenses[3].title}
            amount={expenses[3].amount}
            date={expenses[3].date}
        />
    </div>
);