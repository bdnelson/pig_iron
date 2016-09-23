Rails.application.routes.draw do
  # See http://guides.rubyonrails.org/routing.html
  get :test_exception, to: 'static#test_exception'
  get :test_livereload, to: 'static#test_livereload'
end
