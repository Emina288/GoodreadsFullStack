class Api::BookingsController < ApplicationController
  def index 
    @booking = Booking.all
  end

    def create
      @booking = Booking.new(booking_params)
        if @booking.save
          render :create
        else
          render json: @booking.errors.full_messages, status: 422
        end
        
    end

    private 
    
    def booking_params 
        params.require(:booking).permit(:book_id, :bookshelf_id);
    end

end