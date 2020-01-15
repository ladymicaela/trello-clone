Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    root to: 'static_pages#root'

    namespace :api, defaults: { format: :json } do
      resources :users, except: [:new, :edit]
      resource :session, only: [:create, :destroy]
      resources :boards, except: [:new, :edit] do
        resources :cards, only: [:show, :update, :destroy]
      end
      resources :lists, except: [:new, :show]
      resources :cards, except: [:new, :show]
      patch 'cards/update_cards/:id', :to => 'cards#update_cards'
    end



end