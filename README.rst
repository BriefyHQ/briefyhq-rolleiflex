@briefyhq/rolleiflex
====================

This project was generated with `angular-cli`_.

Minimum Versions:

  * Node: v6.9.5

You need to install it **before** running this codebase::

  $ npm uninstall -g angular-cli @angular/cli
  $ npm cache clean
  $ npm install -g @angular/cli@latest


TODO
-----

* Remove (or change to use another field) the filter by country on the Customer listing.


Development
-----------

Get the code
++++++++++++

Given you have privileges to access the codebase on GitHub, execute the following command on
a shell prompt::

  $ git clone git@github.com:BriefyHQ/briefyhq-rolleiflex.git


Local Install
+++++++++++++

Access the directory containing *briefyhq-rolleiflex* codebase::

  $ cd briefyhq-rolleiflex


Start the development getting all dependencies::

  $ npm install


Run a server::

  $ node_modules/angular-cli/bin/ng serve

And point your browser to: http://localhost:4200/.

.. note:: The app will automatically reload if you change any of the source files.


Code scaffolding
++++++++++++++++

To generate a new component::

  $ ng g component component-name

You can also use *ng g directive/pipe/service/class/module*.

.. warning:: Always generate classes with the *--spec*, i.e. ng g class Pagination --spec



Build
+++++

To build the project execute::

  $ ng build


The build artifacts will be stored in the *dist/* directory.
Use the *-prod* flag for a production build.

Unit tests
++++++++++

To execute the lint::

  $ ng lint


Unit tests
++++++++++

To execute the unit tests via `Karma`_ ::

  $ ng test


End-to-end tests
++++++++++++++++

To execute the end-to-end tests via  `Protractor`_::

  $ ng e2e

.. warning: Before running the tests make sure you are serving the app via *ng serve*.

Further help
++++++++++++

To get more help on the `angular-cli`_ use::

  $ ng help

Or go check out the `Angular-CLI README`_.

References
==========

Styles
------

We use the following components to implement the `Material Design guidelines`_:

  * `Angular Material`_

Some important references are:

  * `Materialize Grid <http://materializecss.com/grid.html>`_
  * `Materialize Icons <http://materializecss.com/icons.html>`_

Components
----------

  * Forms: `ng-formly <https://github.com/formly-js/ng-formly>`_
  * Translation: `ng2-translate <https://github.com/ngx-translate/core>`_
  * JWT Support: `@auth0/angular-jwt <https://github.com/auth0/angular2-jwt>`_


.. _`angular-cli`: https://github.com/angular/angular-cli
.. _`Angular-CLI README`: https://github.com/angular/angular-cli/blob/master/README.md
.. _`Karma`: https://karma-runner.github.io
.. _`Protractor`: http://www.protractortest.org/
.. _`Material Design guidelines`: https://material.io/
.. _`Angular Material`: http://material.angular.io/
