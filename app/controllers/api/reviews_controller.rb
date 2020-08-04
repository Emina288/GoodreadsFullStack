class Api::ReviewsController < ApplicationController

    def index        
        @reviews = Review.all
        render :index
    end

    def create
        @review = Review.new(review_params)

        if @review.save
            render :show
        end
    end

    def destroy
        @review = Review.find(id: params[:id])

        if @review.destroy
        else
            render json: ["Can not delete review"], status: 422 
        end
    end

    def review_params
        params.require(:review).permit(:body, :book_id, :user_id, :rating)
    end
end