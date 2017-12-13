# This is the users controller
class Admin::UsersController < ApplicationController
  # provide definitions for controller actions
  before_action :require_admin
  def index; end
end
