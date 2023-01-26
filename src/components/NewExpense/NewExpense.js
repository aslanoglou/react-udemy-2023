import ExpenseForm from "../NewExpense/ExpenseForm";
import './NewExpense.scss'

const NewExpense = (props) =>{
    const saveExpenseDataHAndler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHAndler}/>
    </div>
}

export default NewExpense