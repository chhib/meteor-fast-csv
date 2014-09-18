Package.describe({
   name: 'chhib:fast-csv',
   summary: "fast-csv packaged for Meteor",
   git: 'https://github.com/chhib/meteor-fast-csv.git',
   version: "0.0.1"
});

Npm.depends({
  "fast-csv": "0.5.2"
});

Package.on_use(function(api) {
   api.add_files('lib.js', 'server');
   api.export('csv');
});
