class Api::BooksController < ApplicationController
    def index

        if params[:q] then
          
          @books = []
          Book.all.each { |book| 
            if (book.title.downcase.include? params[:q].downcase) || (book.isbn.include? params[:q]) || (book.author.name.downcase.include? params[:q].downcase) then
              @books << book 
            end

          }
          
          if @books.length === 0 then render json: ["No results."], status: 401 end
                    
        else
          @books = Book.all
      
    end
  end

    
      def show
        @book = Book.find(params[:id])
      end
end