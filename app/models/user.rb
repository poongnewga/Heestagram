class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validates :name, presence: true, uniqueness: true
  validates :password, presence: true
  validates :password_confirmation, presence: true
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :posts, dependent: :destroy

end
