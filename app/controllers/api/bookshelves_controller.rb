class Api::BookshelvesController < ApplicationController
    def index
        @bookshelves = Bookshelf.where(user_id: current_user.id);
    end

    def show
        @bookshelf = Bookshelf.find(params[:id])
    end

    def create
        @bookshelf = Bookshelf.new(bookshelf_params);
        if @bookshelf.save
            render '/api/bookshelves/show'
        else 
            render json: ["Shelf couldn't be created. Shelf name is either invalid or a duplicate."], status: 401
        end
    end

    def destroy 
        @bookshelf = Bookshelf.find(params[:id])
           if (@bookshelf && @bookshelf.title != "All" && @bookshelf.title != "Read" && @bookshelf.title != "Want to Read" && @bookshelf.title != "Currently Reading")
            
            @bookshelf.destroy 
            render :index
        end
    end

    private 
    
    def bookshelf_params
        params.require(:bookshelf).permit(:title, :user_id)
    end

end