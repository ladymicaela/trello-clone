export const fetchLists = (boardId) => (
    $.ajax({
        method: 'GET',
        url: `/api/lists?boardId=${boardId}`
    })
);

export const fetchList = listId => (
    $.ajax({
        method: 'GET',
        url: `/api/lists/${listId}`
    })
);

export const createList = list => (
    $.ajax({
        method: 'POST',
        url: `/api/lists`,
        data: { list }
    })
);

export const updateList = list => (
    $.ajax({
        method: 'PATCH',
        url: `/api/lists/${list.id}`,
        data: { list }
    })
);

export const destroyList = listId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/lists/${listId}`
    })
);