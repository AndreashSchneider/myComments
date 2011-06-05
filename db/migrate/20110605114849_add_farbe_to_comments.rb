class AddFarbeToComments < ActiveRecord::Migration
  def self.up
    add_column :comments, :farbe, :text
  end

  def self.down
    remove_column :comments, :farbe
  end
end
