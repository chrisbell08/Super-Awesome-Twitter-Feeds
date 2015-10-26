module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'src/js/super-awesome-twitter-feed.js',
                dest: 'dist/js/super-awesome-twitter-feed.js'
            },
            dev: {
                options: {
                    beautify: true,
                    mangle: false,
                    compress: false,
                    preserveComments: 'all'
                },
                src: 'src/js/super-awesome-twitter-feed.js',
                dest: 'dist/js/super-awesome-twitter-feed.js'
            }
        },
        sass_globbing: {
          build: {
              files: {
                  'src/sass/_components.scss' : 'src/sass/components/*.scss'
              },
              options: {
                  useSingleQuotes: false
              }
          }
        },
        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'style.css' : 'src/sass/style.scss'
                }
            }
        },
        watch: {
            js: {
                files: ['src/js/super-awesome-twitter-feed.js'],
                tasks: ['uglify:dev']
            },
            css: {
                files: ['src/sass/**/*.scss'],
                tasks: ['sass_globbing:build', 'sass:dev']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass-globbing');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['uglify:dev', 'sass_globbing:build', 'sass:dev']);

    grunt.registerTask('build', ['uglify:build']);

};