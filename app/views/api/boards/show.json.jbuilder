json.boards do 
    json.set! @board.id do
        json.extract! @board, :id, :title, :creator_id
    end
end




json.members do
    @board.members.each do |member|
        json.set! member.id do
            json.extract! member, :id, :username, :email
        end
    end
end