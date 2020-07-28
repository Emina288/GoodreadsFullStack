class Api::UsersController < ApplicationController
        def create
            @user = User.new(user_params)
        
            if @user.save
              bookshelf1 = {user_id: @user.id, title: "Read"};
              Bookshelf.create(bookshelf1)
              bookshelf2 = {user_id: @user.id, title: "Want to Read"};
              Bookshelf.create(bookshelf2)
              bookshelf3 = {user_id: @user.id, title: "Currently Reading"};
              Bookshelf.create(bookshelf3)

              log_in!(@user)
              render "api/users/show"
            else
              render json: @user.errors.full_messages, status: 422
            end
        end
        private 

        def user_params
          params.require(:user).permit(:email, :name, :password)
        end
end