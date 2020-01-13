class Api::ListsController < ApplicationController

    before_action :require_logged_in

    def create
        @list = List.new(list_params)
        @board = Board.find(@list.board_id)
        if @list.save
            render "api/boards/show"
        else
            render json: @list.errors.full_messages, status: 422
        end
    end

    def index
        @board = Board.find(params[:boardId])
        @lists = @board.lists
        render "api/boards/show"
    end

    def update
        # @list = list
        @list = List.find(params[:id])
        @board = Board.find(@list.board_id)
        if @list.update_attributes(list_params)
            render "api/boards/show"
        else
            render json: @list.errors.full_messages, status: 422
        end
    end

    def destroy
        @list = List.find(params[:id])
        @board = Board.find(@list.board_id)
        if @list.destroy
            render "api/boards/show"
        else
            render plain: "That list does not exist"
        end
    end


    # def reorder(list)
    #     i = list.order
    #     board = Board.find(params[:id])
    #     board.lists[i..-1].each do |list|
    #         list.order -= 1
    #         list.save
    #     end
    # end


    private

    def list_params
        params.require(:list).permit(:title, :board_id)
    end

end
