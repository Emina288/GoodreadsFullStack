class Api::SessionsController < ApplicationController
    def create
      @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
  
      if @user
        log_in!(@user)
        render "api/users/show"
      else
        render json: ["Sorry, that email or password isn't right."], status: 401
      end
    end
  
    def destroy
      @user = current_user
      if @user
        log_out!
        render json: ["You are now signed out!"]
      else
        render json: ["There is nobody logged in"], status: 404
      end
    end
end