class AddCategoryToComments < ActiveRecord::Migration
  def self.up
    add_column :comments, :category, :text
  end

  def self.down
    remove_column :comments, :category
  end
end
