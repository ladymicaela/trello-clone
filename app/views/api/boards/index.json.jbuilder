@boards.each do |board|
    json.set! board.id do
        json.extract! board, :id, :title, :creator_id
    end
end

