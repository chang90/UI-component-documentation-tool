import React from 'react';
import './add-cell.css';
import { useActions } from '../hooks/use-actions';

interface AddCellProps {
  previousCellId: string | null;
}

const AddCell: React.FC<AddCellProps> = ({ previousCellId }) => {
  const { insertCellAfter } = useActions();
  return (
    <div className="add-cell">
      <div className="add-buttons">
        <button className="button is-info is-small" onClick={() => insertCellAfter(previousCellId, 'code')}>Code</button>
        <button className="button is-info is-small" onClick={() => insertCellAfter(previousCellId, 'text')}>Text</button>
      </div>

      <div className="divider"></div>
    </div>
  )
}

export default AddCell;