module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            sass: {
                files: ['style/*.scss'],
                tasks: ['sass:dist']
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    noCache: true
                },
                files: {
                    'style/index.css': 'style/index.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

};