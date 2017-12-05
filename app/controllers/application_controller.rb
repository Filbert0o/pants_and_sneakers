class ApplicationController < ActionController::Base
  #prevent attacks by raising an exception.
  protect_from_forgery with: :exception
end
