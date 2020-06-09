class Api::AuthorsController < ApplicationController
    def show
        @author = Author.find(params[:id])
        
    end

    def index
        @authors = Authors.all
    end
    
end