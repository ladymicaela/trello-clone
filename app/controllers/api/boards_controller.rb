class Api::BoardsController < ApplicationController

    before_action :require_logged_in

    def create
        @board = Board.new(board_params)
        @board.creator_id = current_user.id
        if @board.save
            @membership = BoardMembership.create!(member_id: @board.creator.id, board_id: @board.id)
            @toDo = List.create!(title: "To Do", board_id: @board.id, order: 0)
            @inProgress = List.create!(title: "In Progress", board_id: @board.id, order: 1)
            @done = List.create!(title: "Done", board_id: @board.id, order: 2)
            render "api/boards/show"
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def show
        @board = current_user.boards.find(params[:id])
        if @board
            render "api/boards/show"
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def index
        @boards = current_user.boards
        render "api/boards/index"
    end

    def update
        @board = current_user.boards.find(params[:id])
        if @board.update_attributes(board_params)
            render "api/boards/show"
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def destroy
        @board = current_user.boards.find(params[:id])
        if @board.destroy
            head :no_content
        else
            render plain: "That board does not exist"
        end
    end

    private

    def board_params
        params.require(:board).permit(:title)
    end

end
