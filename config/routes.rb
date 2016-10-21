Rails.application.routes.draw do
  get 'contacts/create'

  root to: 'pages#index'
  post '/', to: 'contacts#create'
  get '/*other', to: redirect('/')
end
