import { useTypedSelector } from '../hooks/use-typed-selector';
import CellListItem from './cell-list-item';
const CellList: React.FC = () => {
  const cell = useTypedSelector(({cells: {order, data}}) => {
    return order.map((id) => {
      return data[id];
    });
  });

  const renderedCells = cell.map(cell => <CellListItem key={cell.id} cell={cell} />)
  return <div>{renderedCells}</div>;
}

export default CellList;