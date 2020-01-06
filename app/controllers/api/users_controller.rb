class Api::UsersController < ApplicationController

    # def new
    #     @user = User.new
    #     render "api/users/new"
    # end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find(params[:id])
        if @user
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    # Probably don't need an index because you will never see all users (if needed must add view)
    def index
        @users = User.all
        render "api/users/index"
    end

    # Currently don't have edit/update functionality so probably won't need this unless I add that feature (if needed must add view)
    # def edit
    #     @user = User.find(params[:id])
    #     render "api/users/edit"
    # end

    # Currently don't have edit/update functionality so probably won't need this unless I add that feature (if needed must add view)
    def update
        @user = User.find(params[:id])
        if @user.update(user_params)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    # Currently don't have delete functionality so probably won't need this unless I add that feature (if needed must add view)
    def destroy
        @user = User.find(params[:id])
        if @user.destroy
            render {}
        else
            render plain: "That user does not exist."
        end
    end

    def search
        @users = User.where("username LIKE '%#{params[:query]}%' OR email LIKE '%#{params[:query]}%'")
        render json: @users
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end


end
