require 'rails_helper'

RSpec.describe StartupNamespace do
  it "returns a namespace" do
    obj = StartupNamespace.new("static", "test_livereload")
    expect(obj.generate).to eq("static.test_livereload")
  end

  it "does not singularize actions" do
    obj = StartupNamespace.new("static", "things")
    expect(obj.generate).to eq("static.things")
  end

  it "does singularize controllers" do
    obj = StartupNamespace.new("apples", "show")
    expect(obj.generate).to eq("apple.show")
  end

  it "converts create to new" do
    obj = StartupNamespace.new("apples", "create")
    expect(obj.generate).to eq("apple.new")
  end

  it "converts update to edit" do
    obj = StartupNamespace.new("apples", "update")
    expect(obj.generate).to eq("apple.edit")
  end

  it "does not singularize namespaces" do
    obj = StartupNamespace.new("fruits/apples", "index")
    expect(obj.generate).to eq("fruits.apple.index")
  end
end
