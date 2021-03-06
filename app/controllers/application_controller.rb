# This is the application controller
class ApplicationController < ActionController::Base
  # prevent attacks by raising an exception.
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

  private

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(
      :sign_up,
      keys: [:first_name, :last_name, :profile_photo]
    )
    devise_parameter_sanitizer.permit(
      :account_update,
      keys: [:first_name, :last_name, :email, :profile_photo]
    )
  end

  def authorize_user
    unless user_signed_in?
      raise ActionController::RoutingError.new('Not Found')
    end
  end

  def require_admin
    unless current_user.admin?
      redirect_to '/404'
    end
  end
end
