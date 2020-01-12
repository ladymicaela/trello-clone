json.boards do 
    json.set! @board.id do
        json.extract! @board, :id, :title, :creator_id
    end
end

json.members do
    @board.members.each do |member|
        json.set! member.id do
            json.extract! member, :id, :username
        end
    end
end

json.lists do
    @board.lists.each do |list|
        json.set! list.id do
            json.extract! list, :id, :title, :order
        end
    end
end

json.cards do
    @board.cards.each do |card|
        json.set! card.id do
            json.extract! card, :id, :title, :description, :due_date, :order
        end
    end
end