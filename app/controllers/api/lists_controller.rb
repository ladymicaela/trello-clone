class Api::ListsController < ApplicationController

    before_action :require_logged_in

    def create
        @list = List.new(list_params)
        @list.board_id = Board.find(params[:board_id])
        if @list.save
            render "api/boards/show"
        else
            render json: @list.errors.full_messages, status: 422
        end
    end

    def show
        # do not need show page (only see all the lists on board show page)
    end

    def index
        board = Board.find(params[:board_id])
        @lists = board.lists
        render "api/boards/show"
    end

    def update
        @list = List.find(params[:id])
        if @list.update_attributes(list_params)
            render "api/boards/show"
        else
            render json: @list.errors.full_messages, status: 422
        end
    end

    def destroy
        @list = List.find(params[:id])
        if @list.destroy
            reorder(@list)
            render "api/boards/show"
        else
            render plain: "That list does not exist"
        end
    end


    def reorder(list)
        i = list.order
        board = Board.find(params[:board_id])
        board.lists[i..-1].each do |list|
            list.order -= 1
            list.save
        end
    end


    private

    def list_params
        params.require(:list).permit(:title)
    end

end
