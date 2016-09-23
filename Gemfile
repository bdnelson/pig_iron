source 'https://rubygems.org'
ruby '2.3.1'

# Environment
gem 'dotenv-rails',            '~> 2.1.1', require: 'dotenv/rails-now'
gem 'rails',                   '~> 5.0.0', '>= 5.0.0.1'
gem 'puma',                    '~> 3.6.0'

# Data Store
gem 'pg',                      '~> 0.19.0'
gem 'sqlite3',                 '~> 1.3.11'
gem 'redis',                   '~> 3.3.1'

# Data Layer Additions
gem 'bcrypt',                  '~> 3.1.7'
gem 'paranoia',                '~> 2.2.0.pre'

# Background
gem 'sidekiq',                 '~> 4.2.1'

# UI
gem 'sass-rails',              '~> 5.0.6'
gem 'uglifier',                '~> 3.0.2'
gem 'jquery-rails',            '~> 4.2.1'
gem 'turbolinks',              '~> 5.0.1'
gem 'jbuilder',                '~> 2.6.0'

# Deployment
group :development do
  gem 'capistrano-rails',      '~> 1.1.8'
  gem 'capistrano-rbenv',      '~> 2.0.4'
end

# Platform specific
gem 'tzinfo-data',             '~> 1.2.2', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Development/Test
group :development, :test do
  gem 'byebug',                '~> 9.0.5', platform: :mri
end

group :development do
  gem 'awesome_print',         '~> 1.7.0'
  gem 'pry-rails',             '~> 0.3.4'
  gem 'web-console',           '~> 3.3.1'
  gem 'listen',                '~> 3.0.5'
  gem 'spring',                '~> 1.7.2'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'meta_request',          '~> 0.4.0'
end

