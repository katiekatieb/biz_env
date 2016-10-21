class ContactMailer < ApplicationMailer
  def request_for_business(contact)
    @contact = contact
    mail(to: 'katiebrasfield@gmail.com', subject: 'Request for Contact')
  end
end
