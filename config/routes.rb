Rails.application.routes.draw do

  get "/shows/list" => "shows#editor", as: 'editor' 

  resources :shows

  root "thescriptures#basis"
  get "/yusso" => "thescriptures#artist", as: 'artist'
  get "/music" => "thescriptures#art", as: 'art'

end
