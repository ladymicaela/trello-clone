# == Schema Information
#
# Table name: lists
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  board_id   :integer          not null
#  order      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class List < ApplicationRecord

    validates :title, :board_id, :order, presence: true
    validates :order, uniqueness: { scope: :board_id }

    belongs_to :board,
        foreign_key: :board_id,
        class_name: 'Board'

    after_validation :set_order
    
    def set_order
        self.order ||= self.board.length
    end

end
