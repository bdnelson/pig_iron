require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module PigIron
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    
    config.generators do |g|
      g.test_framework      :minitest, fixture_replacement: :fabrication
      g.fixture_replacement :fabrication, dir: "test/fabricators"
    end
  end
end
