var path = require('path');

module.exports = function (grunt) {

	var file = grunt.file;
	var task = grunt.task;
	var pathname = path.basename(__dirname);
	
    grunt.initConfig({

        // 对页面进行清理
        clean: {
            doc: {
                src: '../../guideline/'
			}
        },

		// 拷贝文件
		copy : {
			main: {
				files:[
					{
						expand:true,
						cwd:'./',
						src: ['**/*','!**/*.md','!**/*.markdown'], 
						dest: '../../guideline/', 
						filter: 'isFile'
					}
				]
			}
		},
		replace: {
			dist: {
				options: {
					variables: {
						'': '&#8658;'
					},
					prefix:'='
				},
				files: [
					{
						expand: true, 
                        cwd: 'doc/',
						src: ['**/*.html']
					}
				]
			}
		},
		markdown: {
			api: {
				files: [
					{
						expand: true,
						cwd:'./api',
						src: '**/*.md',
						dest: '../../guideline/api/',
						ext: '.html'
					}
				],
				options:{
					template:'./api/assets/template.jst',
					templateContex:{},
					markdownOptions:{
						gfm:false
					}
				}

			},
			guide: {
				files: [
					{
						expand: true,
						cwd:'./',
						src: ['**/*.md','!api/**/*'],
						dest: '../../guideline/',
						ext: '.html'
					}
				],
				options:{
					template:'./templates/index.jst',
					templateContex:{},
					markdownOptions:{
						gfm:false
					}
				}

			}
		},
        watch: {
            'all': {
                files: [ './**/*.md' ,'./**/*.js','./**/*.css','./**/*.jst','./**/*.html'],
                tasks: [ 'clean:doc', 'copy','markdown' ]
            }
        }

		// 合并文件
		/*
		concat: {
			dist: {
				src: ['from.css'],
				dest: 'build/to.css'
		
			}
		},
		*/

    });

	// ======================= 载入使用到的通过NPM安装的模块 ==========================
	
    grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-replace');

	grunt.registerTask('listen', 'clam watch ...', function() {
		task.run('watch');
	});

	grunt.registerTask('default', ['clean:doc', 'copy', 'markdown']);

};
