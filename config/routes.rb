Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :books, only: [:index, :show]
    resources :authors, only: [:show, :index]
    resources :bookshelves, only: [:index, :show, :create, :destroy]
    resources :bookings, only: [:create, :index]
    resources :reviews, only: [:create, :index, :destroy]
  end

  root "static_pages#root"
end
