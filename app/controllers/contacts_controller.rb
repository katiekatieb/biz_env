class ContactsController < ApplicationController
  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      ContactMailer.request_for_business(@contact).deliver
      @contact = Contact.new
      render json: { :success => true, :html => (render_to_string partial: 'contacts/form')}
    else
      render json: @contact.errors, status: :unprocessable_entity
    end
  end

  def contact_params
    params.require(:contact).permit(:first_name,
                                    :last_name,
                                    :email,
                                    :phone_number,
                                    :comment)
  end
end
