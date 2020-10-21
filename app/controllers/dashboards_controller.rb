class DashboardsController < ApplicationController

  def principal
  end

  def forms
  end

  def notification
    redirect_to root_path, success: "Deu certo"
  end

  def troca_mudulo
    current_user.update_attributes(tip_menu: !current_user.tip_menu)
    redirect_to root_path, warning: "Modulo #{ current_user.tip_menu ? 'Financeiro' : 'Gerenciamento' }"
  end

  def teste_email
    UserMailer.with(user: []).welcome_email.deliver_now
    redirect_to '/'
  end

end
