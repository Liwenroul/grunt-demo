module.exports=function(grunt){
    grunt.initConfig({
        uglify:{
            'a.min.js':'a.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('default',['uglify']);
};