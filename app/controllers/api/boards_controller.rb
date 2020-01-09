class Api::BoardsController < ApplicationController

    def create
        @board = Board.new(board_params)
        @board.creator_id = current_user.id
        if @board.save
            render "api/boards/show"
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def show
        @board = Board.find(params[:id])
        if @board
            render "api/boards/show"
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def index
        @boards
    end


    private

    def board_params
        params.require(:board).permit(:title)
    end

end
