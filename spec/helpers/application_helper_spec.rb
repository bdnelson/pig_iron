require "rails_helper"

describe ApplicationHelper do
  describe "#startup_namespace" do

    it "returns a namespace identifier based on route and action" do
      expect(helper.startup_namespace("fruits/apples/jonathons", "create")).to eq("fruits.apples.jonathon.new")
    end
  end
end
