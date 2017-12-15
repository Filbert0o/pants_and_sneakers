Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "venues#index"
  resources :venues, only: [:index, :show, :new, :create] do
    resources :reviews, only: [:new, :create]
  end

  namespace :api do
    namespace :v1 do
      resources :venues, only: [:index, :show, :new, :create] do
        resources :reviews, only: [:create] do
          resources :votes, only: [:create]
        end
      end
      resources :reviews, only: [:create, :update]
      resources :votes, only: [:create]
      resources :users
    end
  end

  namespace :admin do
    resources :users
  end
end
