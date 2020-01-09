json.array! @boards, :title, :creator_id

json.boards.each do |board|
    board.members.each do |member|
        json.set! member.id do
            json.extract! member, :id, :username, :email
        end
    end
end