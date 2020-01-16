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

    def update_cards
        @card_og = Card.find(params[:id])
        list_drag = @card_og.list
        list_drop = card_params[:list_id].to_i
        og_order = @card_og.order
        @cards_drag = Card.where(list_id: @card_og.list_id).order(:order)
        # debugger
        @cards_drop = Card.where(list_id: card_params[:list_id]).order(:order)
        
        if list_drag.id != list_drop  
            @cards_drop.reverse.each do |card|
                if card.order >= card_params[:order].to_i
                    new_order = card.order + 1
                    card.update(order: new_order)
                end
            end
            
            @card_og.update_attributes(card_params)
            
            @cards_drag.each do |card|
                if card.order > og_order
                    new_order = card.order - 1
                    card.update(order: new_order)
                end
            end

        else

            @card_og.update(order: -1)

            if og_order > card_params[:order].to_i #moved card up in list
                
                @cards_drag.reverse.each do |card|
                    if card.order >= card_params[:order].to_i && card != @card_og && card.order < og_order
                        new_order = card.order + 1
                        card.update(order: new_order)
                    end

                end
            else
                
                @cards_drag.each do |card|
                    if card.order <= card_params[:order].to_i && card != @card_og && card.order > og_order #moved card down in list
                        new_order = card.order - 1
                        card.update(order: new_order)
                    end
                    
                end

            end
            
            @card_og.update(order: card_params[:order].to_i)
        
        end


        @board = list_drag.board

        render "api/boards/show"

    end

    def destroy
        @card = Card.find(params[:id])
        @board = Board.find(@card.list.board_id)
        if @card.destroy
            @cards = Card.where(list_id: @card.list_id).order(:order)
            @cards.each do |card|
                if card.order > @card.order
                    new_order = card.order - 1
                    card.update(order: new_order) 
                end                   
            end
            render "api/boards/show"
        else
            render plain: "That card does not exist"
        end
    end


    private

    def card_params
        params.require(:card).permit(:title, :description, :due_date, :list_id, :order, :id)
    end

end
