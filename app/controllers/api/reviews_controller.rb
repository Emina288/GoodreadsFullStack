class Api::ReviewsController < ApplicationController

    def index        
        @reviews = Review.all
        render :index
    end

    def create
        @review = Review.new(review_params)

        if @review.save
            render :index
        end
    end

    def destroy
        @review = Review.find(id: params[:id])

        if @review.destroy
        else
            render json: ["Can not delete review"], status: 422 
        end
    end

    def update
        @review =Review.find_by(id: params[:id])
        if @review.update(review_params)
            render :index
        else
            render json: @review.errors.full_messages, status: 422
        end 
    end 



    def review_params
        params.require(:review).permit(:body, :book_id, :user_id, :rating)
    end
end