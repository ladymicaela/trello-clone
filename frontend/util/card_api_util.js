export const fetchCards = (cardId) => (
    $.ajax({
        method: 'GET',
        url: `/api/cards?cardId=${cardId}`
    })
);

export const fetchCard = cardId => (
    $.ajax({
        method: 'GET',
        url: `/api/boards/:board_id/cards/${cardId}`
    })
);

export const createCard = card => (
    $.ajax({
        method: 'POST',
        url: '/api/cards',
        data: { card }
    })
);

export const updateCard = card => (
    $.ajax({
        method: 'PATCH',
        url: `/api/boards/:board_id/cards/${card.id}`,
        data: { card }
    })
);

export const destroyCard = cardId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/boards/:board_id/cards/${cardId}`,

    })
);