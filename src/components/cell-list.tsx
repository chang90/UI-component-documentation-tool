import { Fragment } from 'react';
import { useTypedSelector } from '../hooks/use-typed-selector';
import CellListItem from './cell-list-item';
import AddCell from './add-cell';
const CellList: React.FC = () => {
  const cell = useTypedSelector(({cells: {order, data}}) => {
    return order.map((id) => {
      return data[id];
    });
  });

  const renderedCells = cell.map(cell => (
  <Fragment key={cell.id}>
    <CellListItem key={cell.id} cell={cell} />
    <AddCell previousCellId={cell.id} />
  </Fragment>)
  )
  return <div>
    <AddCell previousCellId={null} />
    {renderedCells}
  </div>;
}

export default CellList;