export const MOVE_CHESS = 'move_chess';
export const RETURN_CHESS = 'return_chess';

export function chessClick(txtValue, index) {
  // drop index
  return { type: MOVE_CHESS, txtValue};
}


export function chessDbClick(index) {
  // drop index
  return { type: RETURN_CHESS, index};
}

