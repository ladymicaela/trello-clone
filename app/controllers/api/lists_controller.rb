class Api::ListsController < ApplicationController

    before_action :require_logged_in

    def create
        @list = List.new(list_params)
        @list.board_id = Board.find(params[:id])
        if @list.save
            render "api/boards/show"
        else
            render json: @list.errors.full_messages, status: 422
        end
    end

    def index
        board = Board.find(params[:id])
        @lists = board.lists
        render "api/boards/show"
    end

    def update(list)
        @list = list
        if @list.update_attributes(list_params)
            render "api/boards/show"
        else
            render json: @list.errors.full_messages, status: 422
        end
    end

    def destroy(list)
        @list = list
        if @list.destroy
            @list.board.order_lists(@list)
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
        params.require(:list).permit(:title)
    end

end