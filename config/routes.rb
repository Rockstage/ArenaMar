Rails.application.routes.draw do

  root 'home#index'

  resources :home
  get 'rooms', to: 'home#rooms'
  get 'services', to: 'home#services'
  get 'gallery', to: 'home#gallery'
  get 'about_us', to: 'home#about_us'
  get 'location', to: 'home#location'
  get 'contacts', to: 'home#contacts'
  get 'restaurants', to: 'home#restaurants'
  get 'special_offers', to: 'home#special_offers'
  get 'booking', to: 'home#booking'
  get 'cookiepolicy', to: 'home#cookiepolicy'
  get 'privacy', to: 'home#privacy'

  # i18n
  get '/change_locale/:locale', to: 'settings#change_locale', as: :change_locale

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
