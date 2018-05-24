Package.describe({
  name: 'jkuester:autoform-tags',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'Provides a form field to enter tags.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jankapunkt/meteor-autoform-tags.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6');

	api.use([
	  'check',
	  'ecmascript',
	  'underscore',
	  'http',
	  'reactive-var',
	  'templating@1.3.2',
	  'fortawesome:fontawesome@4.7.0',
	  'aldeed:autoform@6.2.0',
	'aldeed:template-extension@4.0.0'
	]);

	api.addFiles([
		'autoform-tags.css',
		'autoform-tags.html',
		'autoform-faicon.js',
	], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('jkuester:autoform-tags');
  api.mainModule('autoform-tags-tests.js');
});