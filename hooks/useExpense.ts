import { useSelector } from 'react-redux';

const useExpense = (dayPeriod: number) => {
  const filteredDate = Date.now() - dayPeriod * 24 * 60 * 60000;
  const expense = useSelector((state: any) => state.expense?.data);

  const list: any[] = expense?.filter(
    (e: any) => Date.parse(e.date) >= filteredDate
  );
  const summary: number = list
    .map((item) => parseFloat(item?.amount))
    .reduce((prev, next) => prev + next, 0);

  return { summary, list };
};

export default useExpense;
