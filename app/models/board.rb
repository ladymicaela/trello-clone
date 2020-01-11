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
        foreign_key: :board_id,
        class_name: 'BoardMembership',
        dependent: :destroy   

    has_many :members, 
        through: :board_memberships,
        source: :member,
        dependent: :destroy

    has_many :lists,
        foreign_key: :board_id,
        class_name: 'List',
        dependent: :destroy


    def order_lists(list)
        i = list.order
        sorted_lists = board.lists.sort_by { |list| list.order }
        sorted_lists[i..-1].each do |list|
            list.order -= 1
            list.save
        end
    end

end
