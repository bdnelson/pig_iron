module ApplicationHelper
  # Generate a unique namespace for each page based on controller + action.
  def startup_namespace(controller, action)
    StartupNamespace.new( controller, action).generate
  end
end
