class StartupNamespace
  def initialize(controller, action)
    @namespace = controller.split('/')
    @namespace << @namespace.pop.singularize
    @namespace << translate_action(action)
  end

  def generate
    @namespace.flatten.join('.')
  end

  private

  # Since validation failures will rerender from a different action,
  # alias create -> new and update -> edit
  def translate_action(action)
    case action
    when /create/i then 'new'
    when /update/i then 'edit'
    else action
    end
  end
end
