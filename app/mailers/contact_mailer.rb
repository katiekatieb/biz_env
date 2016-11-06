class ContactMailer < ApplicationMailer
  def request_for_business(contact)
    @contact = contact
    mail(to: 'kent@businessenvironment.net', subject: 'Request for Contact')
  end
end
