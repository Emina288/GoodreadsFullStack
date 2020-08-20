class Api::BooksController < ApplicationController
    def index

        if params[:q] then
          
          @books = []
          Book.all.each { |book| 
            if (params[:q].downcase.split("-")[0] == "all")
              if (book.title.downcase.include? params[:q].downcase.split("-")[1]) || (book.isbn.include? params[:q].split("-")[1]) || (book.author.name.downcase.include? params[:q].downcase.split("-")[1]) then
                @books << book 
              end
            elsif (params[:q].downcase.split("-")[0] == "title")
               if (book.title.downcase.include? params[:q].downcase.split("-")[1]) then
                @books << book 
              end
            elsif (params[:q].downcase.split("-")[0] == "author")
               if (book.author.name.downcase.include? params[:q].downcase.split("-")[1]) then
                @books << book 
               end
             elsif (params[:q].downcase.split("-")[0] == "isbn")
               if (book.isbn.include? params[:q].downcase.split("-")[1]) then
                @books << book 
               end
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