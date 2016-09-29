require 'sidekiq/web'

Rails.application.routes.draw do
  # In a production environment, this should be behind authentication.
  mount Sidekiq::Web => '/admin/queues'

  # See http://guides.rubyonrails.org/routing.html
  get :test_exception, to: 'static#test_exception'
  get :test_livereload, to: 'static#test_livereload'
end
