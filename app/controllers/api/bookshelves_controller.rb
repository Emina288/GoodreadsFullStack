class Api::BookshelvesController < ApplicationController
    def index
        @bookshelves = Bookshelf.all;
    end

    def show
        @bookshelf = Bookshelf.find(params[:id])
    end

    def create
        @bookshelf = Bookshelf.new(bookshelf_params);
        if @bookshelf.save && (@bookshelf.title != "All" && @bookshelf.title != "Read" && @bookshelf.title != "Currently")
            render :show
        else 
            render json: @bookshelf.errors.full_messages, status: 422
        end
    end

    def destroy 
        @bookshelf = Bookshelf.find(params[:id])
           if (@bookshelf.title != "All" && @bookshelf.title != "Read" && @bookshelf.title != "Want to Read" && @bookshelf.title != "Currently Reading")
            
            @bookshelf.destroy 
            render :index
        end
    end

    private 
    
    def bookshelf_params
        params.require(:bookshelf).permit(:title, :user_id)
    end

end