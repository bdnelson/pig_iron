# Pig Iron - An Oppinionated Rails 5 Template


## Application Structure

		├── app
		│   ├── assets
		│   │   ├── config
		│   │   ├── images
		│   │   ├── javascripts
		│   │   │   ├── channels
		│   │   │   ├── core_ext
		│   │   │   └── startup
		│   │   └── stylesheets
		│   ├── channels
		│   │   └── application_cable
		│   ├── controllers
		│   │   └── concerns
		│   ├── decorators
		│   ├── helpers
		│   ├── jobs
		│   ├── mailers
		│   ├── models
		│   │   └── concerns
		│   ├── serializers
		│   ├── services
		│   └── views
		│       └── layouts
		└── db
		    ├── fixtures
		    └── migrate

 * app
    * assets - Rails Asset Pipeline
        * config - Manifest
        * images - Images
        * javascripts - JS no CoffeeScript
            * channels - Client side channel support.
            * core_ext - Extensions to core Javascript.
            * startup - Javascript functions that are run on startup of individual pages.
        * stylesheets - SCSS
    * channels - A channel encapsulates a logical unit of work, similar to what a controller does in a regular MVC setup.
        * application_cable - Shared logic between channels - kinda like concerns for controllers and models.
    * controllers - Controllers
        * concerns - Concerns are mainly for DRYing up your models and controllers.
    * decorators - Decorators are used for separating models' business logic with their user appearance. E.g. for storing methods only used in the views and for other displaying. (Gem: draper)
    * helpers - Helpers are solidly for moving logic out of the view and thus simplifying the view patterns and DRYing up the views. Usually used for simple things ('cause otherwise it's better to use a decorator or a presenter).
    * jobs - Background processing. (Gem: sidekiq)
    * mailers - Emails
    * models - Models
        * concerns - Concerns are mainly for DRYing up your models and controllers.
    * serializers -  (Gem: active_model_serializers)
    * services - Service Objects are mainly used for sophisticated logic that does not necessarily belong in a specific model/controller and/or deals with several models.
 * db
    * fixtures -  (Gem: seed-fu)
    * migrate - Normal Rails database migrations, minus the setup data.  That's in the fixtures directory.
