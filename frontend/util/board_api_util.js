export const fetchBoards = () => (
    $.ajax({
        method: 'GET',
        url: '/api/boards'
    })
);

export const fetchBoard = boardId => (
    $.ajax({
        method: 'GET',
        url: `/api/boards/${boardId}`,
    })
);

export const createBoard = board => (
    $.ajax({
        method: 'POST',
        url: '/api/boards',
        data: { board }
    })
);

export const updateBoard = board => (
    $.ajax({
        method: 'PATCH',
        url: `/api/board/${board.id}`,
        data: { board }
    })
);

export const destroyBoard = board => (
    $.ajax({
        method: 'DELETE',
        url: `api/board/${board.id}`
    })
);
