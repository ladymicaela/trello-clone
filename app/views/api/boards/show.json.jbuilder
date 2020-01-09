json.extract! @board, :title, :creator_id
json.members do
    @board.members.each do |member|
        json.set! member.id do
            json.extract! member, :id, :username
        end
    end
end