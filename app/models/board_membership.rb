# == Schema Information
#
# Table name: board_memberships
#
#  id         :bigint           not null, primary key
#  board_id   :integer          not null
#  member_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class BoardMembership < ApplicationRecord

    validates :board_id, :member_id, presence: true
    validates :board_id, uniqueness: { scope: :member_id }
    
    belongs_to :board,
        foreign_key: :board_id,
        class_name: 'Board'

    belongs_to :member,
        foreign_key: :member_id,
        class_name: 'User'

end
