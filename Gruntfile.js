"use strict";

module.exports = function( grunt ) {
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-browser-sync");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-postcss");
    grunt.loadNpmTasks("grunt-autoprefixer");
  

    grunt.initConfig({
        less: {
          style: {
            files: {
              "css/style.css": "less/style.less"
            }
          }
        },

        autoprefixer: {
            options: {
                browsers: [ 
                "last 1 versions",
                "last 2 Chrome versions",
                "last 2 Firefox versions",
                "last 2 Opera versions",
                "last 2 Edge versions",
                ]
            },
            your_target: {
             
            },
        },
    
        postcss: {
          style: {
            options: {
             
            },
            src: "css/*.css"
          }
        },
    
        browserSync: {
          server: {
            bsFiles: {
              src: [
                "*.html",
                "css/*.css"
              ]
            },
            options: {
              server: ".",
              watchTask: true,
              notify: false,
              open: true,
              cors: true,
              ui: false
            }
          }
        },
    
        watch: {
          style: {
            files: ["less/**/*.less"],
            tasks: ["less", "postcss"]
          }
        }
      });
    
      grunt.registerTask("serve", ["browserSync", "watch"]);
};