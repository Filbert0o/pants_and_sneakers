# Api User
class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  # before_action :authenticate_user!, except: [:index, :show]

  def index
    users = User.all
    render json: { users: users, current_user: current_user }
  end

  def destroy
    user = User.find(params[:id])
    user.destroy

    render json: user
  end
end
