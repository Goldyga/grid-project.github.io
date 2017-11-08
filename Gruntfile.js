module.exports = function(grunt) {

  // Project configuration.
grunt.initConfig({ 

    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      target1: ['imagemin'],
      target2: [['watch'], 'browserSync']
    }, 
    
    jshint: {
      all: ['js/*.js']
    },

    imagemin: {
  		dynamic: {
  			files: [{
  				expand: true,
  				cwd: 'img/',
  				src: ['**/*.{png,jpg,gif}'],
  				dest: 'imageMin/'
  			}]
  		}
  	},

    watch: {
      scripts: {
          files: ['css/*.css','js/*.js','img/*.{png,jpg,gif}'],
          tasks: ['jshint','imagemin'],
          options: {
              spawn: false,
              livereload: true
          },
      }
    }, 

    browserSync: {
      bsFiles: {
          src : ['css/*.css',
                  'js/*.js',
                '*html']
      },
      options: {
          server: {
              baseDir: ""
          }
      }
    }

});
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['concurrent:target1', 'concurrent:target2']);
};