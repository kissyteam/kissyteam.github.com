# Kissy Module Compiler（Grunt-KMC）

Grunt-kmc 依赖 kmc，[kmc 使用指南](https://github.com/daxingplay/ModuleCompiler/)。

环境依赖：Node，Grunt。

## 环境准备

Grunt-kmc 依赖 Grunt。[参照这里安装Grunt](http://gruntjs.com/getting-started)，[学习如何写Gruntfile](http://gruntjs.com/sample-gruntfile)。熟悉以上内容后，可以这样来安装grunt-kmc插件：

	npm install grunt-kmc --save-dev

打开你创建的Gruntfile，并添加代码：

	grunt.loadNpmTasks('grunt-kmc');

## `KMC`任务配置

在项目的Gruntfile文件中，在`grunt.initConfig()`函数参数的JSON对象中，添加一段名为`kmc`的段落。

	grunt.initConfig({
		kmc: {
			options: {
				// 任务配置项，更多配置项请参照这里：
				// https://github.com/daxingplay/ModuleCompiler
			},
			your_target: {
				// 目标任务，定义文件筛选规则
			}
		}
	})

## 配置项

### options.packages

类型：`Array`，默认值：`[]`，KISSY 包配置。

### options.charset

类型：`String`，默认值：`utf-8`，

### options.comboOnly

类型：`Boolean`，默认值：`false`，当指定某个文件为入口进行解析时，只生成这个文件的依赖Map，不作静态合并

### options.depFilePath

类型：`String`，默认值：`""`，依赖关系表存放的文件路径

### options.depFileCharset

类型：`String`，默认值：和options.charset 保持一致，依赖关系表存放的文件的编码类型

### options.traverse

类型：`Boolean`，默认值：`false`，当指定模个文件为入口文件时，遍历子目录进行构建

### options.comboMap

类型：`Boolean`，默认值：`false`，当指定一批文件为源文件时，对这些文件只生成模块依赖关系表，存放于`options.depFilePath`中

----------------------------------

## 示例代码

### 示例1，单文件静态合并

入口为单个文件，将这个文件的依赖关系解析好后合并入另一个文件

	grunt.initConfig({
		kmc: {
			main:{
				options: {
					packages: [
						{
							name: 'test',
							path: 'assets/src',
							charset: 'utf-8'
						}
					]
				},
				files: [{
					src: 'assets/src/test/index.js',
					dest: 'assets/dist/test/index.combo.js'
				}]
			}
		}
	});

详细配置项请参照[kmc首页](https://github.com/daxingplay/ModuleCompiler)。

如果输出`gbk`编码的文件，需要配置全局项

	kmc: {
		options: {
			charset:'gbk',
			packages: [
				{
					name: 'pkg-name',
					path: '../',
					charset:'gbk'
				}
			]
		},
	//...
	grunt.file.defaultEncoding = 'gbk';



### 示例2，批量静态合并

入口为一批文件，每个文件都解析合并

	grunt.initConfig({
        kmc: {
            options: {
                packages: [
                    {
                        name: 'pkg-name',
                        path: '../',
						charset:'utf-8'
                    }
                ],
				// 将 ModuleName 中的 `src` 去掉
				map: [['pkg-name/src/', 'pkg-name/']]
            },

            main: {
                files: [
                    {
						// 这里指定项目根目录下所有文件为入口文件
                        expand: true,
						cwd: 'src/',
                        src: [ '**/*.js', '!Gruntfile.js'],
                        dest: 'build/'
                    }
                ]
            }
		}
	});


### 示例3，批量静态合并2

入口为一批文件，每个文件都解析合并，包名从配置文件中读取

	grunt.initConfig({
		// 读取`abc.json配置文件中的配置`
        pkg: grunt.file.readJSON('abc.json'),
        kmc: {
            options: {
                packages: [
                    {
                        name: '<%= pkg.name %>',
                        path: '../',
						charset:'utf-8'
                    }
                ],
				// 将 ModuleName 中的 `src` 去掉
				map: [['<%= pkg.name %>/src/', '<%= pkg.name %>/']]
            },

            main: {
                files: [
                    {
						// 这里指定项目根目录下所有文件为入口文件
                        expand: true,
						cwd: 'src/',
                        src: [ '**/*.js', '!Gruntfile.js'],
                        dest: 'build/'
                    }
                ]
            }
		}
	});

其中 abc.json 文件内容如下：

	{
		"name": "my-custom-package-name",
	}

### 示例4，针对一批文件生成依赖关系表

只生成模块依赖关系表，对源文件不做修改

	grunt.initConfig({
		options: {
			packages: [
				{
					name: 'h5-test',
					path: './src/', //指定package起始路径
					charset:'utf-8'
				}
			],
			// 生成模块依赖关系表
			depFilePath:'build/mods.js',
			comboOnly:true,
			comboMap:true
		},
		main: {
			files: [
				{
					src: 'src/**/*.js',
					dest: 'build/'
				}
			]
		}
	});

仅这样做通常是不够的，源文件需要手动补全模块名，比如

	KISSY.add('h5-test/abc/index',function(S){});

另外此功能还需配合[Copy插件](http://npmjs.org/grunt-contrib-copy)一起完成。

## 应用

[Clam](clam.html)工具和[ABC](http://abc.f2e.taobao.net/)依赖kmc。
