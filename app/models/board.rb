# == Schema Information
#
# Table name: boards
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Board < ApplicationRecord

    validates :title, :creator_id, presence: true

    belongs_to :creator,
        foreign_key: :creator_id,
        class_name: 'User'

    has_many :board_memberships,
        foreign_key: :member_id,
        class_name: 'BoardMembership'   

    has_many :members, 
        through: :board_memberships,
        source: :member

        
        



end
