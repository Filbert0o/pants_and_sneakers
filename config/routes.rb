Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "venues#index"
  resources :venues, only: [:index, :show, :new, :create] do
    resources :reviews, only: [:new, :create, :show]
  end

  namespace :api do
    namespace :v1 do
      resources :venues, only: [:index, :show, :new, :create]
      resources :reviews, only: [:index, :create]
      resources :users
    end
  end

  namespace :admin do
    resources :users
  end
end
