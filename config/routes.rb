Rails.application.routes.draw do


  get '/custom', to: "custom#index"

  resources :cohorts, only: [:index, :show]

  resources :cohorts, only: :show do
    resources :popsicle, only: [:index]
    resources :projects, only: [:index, :show]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
