class Api::CardsController < ApplicationController

    before_action :require_logged_in

    def create
        @card = Card.new(card_params)
        @list = List.find(@card.list_id)
        @board = @list.board
        if @card.save
            render "api/boards/show"
        else
            render json: @card.errors.full_messages, status: 422
        end  
    end

    def show
        @card = Card.find(params[:id])
        if @card
            render "api/cards/show"
        else
            render json: @card.errors.full_messages, status: 422
        end
    end

    def index
        @list = List.find(params[:listId])
        @board = @list.board
        @cards = @list.cards
        render "api/boards/show"
    end

    def update
        @card = Card.find(params[:id])
        if @card.update_attributes(card_params)
            render "api/cards/show"
        else
            render json: @card.errors.full_messages, status: 422
        end
    end

    def destroy
        @card = Card.find(params[:id])
        if @card.destroy
            render "api/boards/show"
        else
            render plain: "That card does not exist"
        end
    end


    private

    def card_params
        params.require(:card).permit(:title, :description, :due_date, :list_id)
    end

end
