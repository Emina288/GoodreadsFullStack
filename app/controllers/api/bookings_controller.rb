class Api::BookingsController < ApplicationController
  def index 
    @bookings = Booking.all
  end

  def create
    @booking = Booking.new(booking_params)
    @current_user = Bookshelf.find_by(id: booking_params[:bookshelf_id]).user_id
    @bookshelfTitle = Bookshelf.find_by(id: @booking.bookshelf_id).title

    if @booking.save
      if @bookshelfTitle == "Read" || @bookshelfTitle == "Currently Reading" || @bookshelfTitle == "Want to Read"
        @shelves = Book.find_by(id: booking_params[:book_id]).bookshelves.where(user_id: @current_user)
        
        @shelves.each do |shelf|
          if shelf.title == 'Read' || shelf.title == 'Currently Reading' || shelf.title == 'Want to Read'
            @bookingDelete = Bookshelf.find_by(id: shelf.id).bookings.where(book_id: booking_params[:book_id])[0]
            if @booking.id != @bookingDelete.id
              @bookingDelete.destroy
            end
          end
        end
      end

      if @shelves
        @shelves = Book.find_by(id: booking_params[:book_id]).bookshelves.where(user_id: @current_user) 
      end
      
      render :create
    end
  end

  def delete 
        @booking = Booking.find_by(book_id: params[:book_id], bookshelf_id: params[:bookshelf_id]) 
        if (@booking)
          @booking.destroy
          render :create
        end
    end

    private 
    
    def booking_params 
        params.require(:booking).permit(:book_id, :bookshelf_id);
    end

end