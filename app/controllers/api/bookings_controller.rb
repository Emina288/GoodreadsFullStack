class Api::BookingsController < ApplicationController

    def create
        
      end
      @booking = Booking.new(booking_params)
        if @booking.save
          render '/api/bookshelves/show'
        else
          render json: @booking.errors.full_messages, status: 422
        end
        
    end

    def destroy 
        
    end

    private 
    
    def booking_params 
        params.require(:booking).permit(:book_id, :bookshelf_id);
    end

end