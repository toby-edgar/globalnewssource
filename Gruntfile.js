module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/custom.js',
        dest: 'js/custom.min.js'
      }
    }, // uglify ends
    sass: {
      dist: {
        files: {
          'css/style.css': 'sass/style.scss'
        }
      }
    }, //scss ends
    watch: {
      scripts: {
        files: ['js/custom.js', 'sass/style.scss', 'index.html', 'Gruntfile.js'],
        tasks: ['uglify', 'sass'],
        options: {
          spawn: false,
        }
      }
    }, // watch ends
    jshint: {
      all: ['Gruntfile.js', 'js/custom.js']
    },//js hint ends
    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['css/style.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['css/style.css']
      }
    }, //css lint ends
    htmllint: {
      options: {},
      src: [
        'index.html'
      ],
    },

  });

  // Load the plugin that provides the "uglify" amd "sass" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-htmllint');


  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass', 'watch', 'csslint', 'htmllint', 'jshint']);

};
