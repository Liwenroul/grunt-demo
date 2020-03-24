module.exports=function(grunt){
    
    grunt.initConfig({
        cssmin:{
            'a.min.css':'a.css'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    


    grunt.registerTask('default',['cssmin']);
};