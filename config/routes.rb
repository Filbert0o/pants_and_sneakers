Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "venues#index"
  resources :venues, only: [:index, :show, :new, :create]

  namespace :api do
    namespace :v1 do
      resources :venues, only: [:index, :show, :new, :create]
    end
  end
end
