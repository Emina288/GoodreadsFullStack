# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord 
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :email, :session_token, presence: true, uniqueness: true
    validates :name, :password_digest, presence: true 
    validates :password, length: { minimum: 6, allow_nil: true }

    attr_reader :password

    after_initialize :ensure_session_token!

    has_many :books_and_user
    
    has_many :reviews

    has_many :bookshelves,
    foreign_key: :user_id,
    class_name: :Bookshelf

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.update!(session_token: User.generate_session_token!)
        self.session_token
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        return user if user && user.is_password?(password)
        nil 
    end

    def is_password?(password)
        digest = BCrypt::Password.new(self.password_digest)
        digest.is_password?(password)
    end

    private 

    def self.generate_session_token!
        SecureRandom::urlsafe_base64(16)
    end

    def ensure_session_token!
        self.session_token ||= User.generate_session_token!
    end
end
