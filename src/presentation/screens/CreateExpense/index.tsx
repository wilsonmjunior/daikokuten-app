import { ScreenHeight } from '../../components/ScreenHeight'
import { IExpense } from '../../../infra/types/Expense'
import { createExpense } from '../../../infra/services/expenses'

export function CreateExpense() {
  const handleCreateExpense = async () => {
    await createExpense({} as IExpense)
  }

  return (
    <ScreenHeight>

    </ScreenHeight>
  )
}
