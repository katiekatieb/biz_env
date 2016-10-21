class Contact < ApplicationRecord
  validates :first_name, presence: true, allow_blank: false
  validates :last_name, presence: true, allow_blank: false
  validates :email, presence: true
  validates :phone_number, presence: true

  def full_name
    [first_name, last_name].join(' ').strip
  end
end
