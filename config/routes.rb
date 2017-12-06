Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "venues#index"
  resources :venues, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :venues, only: [:index, :show]
    end
  end
end
