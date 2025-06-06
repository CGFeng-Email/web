/**
 * Created by Administrator on 2018/2/9.
 */
const {src, dest, series, parallel, watch} = require('gulp');
const fileinclude = require('gulp-file-include'); //合并html文件
const replace = require('gulp-replace'); //文本替换

const less = require('gulp-less'); //less
const autoprefixer = require('gulp-autoprefixer'); //添加浏览器内核前缀
const sourcemaps = require('gulp-sourcemaps'); //sourcemaps,生成.map文件

// 合并拼接html & 修改引用路径
function htmlInclude() {
    return src('page/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: 'temp'
        })) // 合并文件
        .pipe(replace('../../', '')) //修改引用路径
        .pipe(dest('../'))
}

// less编译
function lessProcess() {
    return src('../less/style.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer({
            overrideBrowserslist: require('./package.json').browserslist
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('../css/'))
}

// 总任务
let allTasks = parallel(htmlInclude,lessProcess);

// html合并监听
function htmlListen() {
    const watcher = watch(['page/*.html', 'temp/*.html'], htmlInclude);
    watcher.on('change', function (path, stats) {
        console.log(`File ${path} was changed`);
    });
}
// less 监听
function lessListen() {
    const watcher = watch(['../less/*.less'], lessProcess);
    watcher.on('change', function (path, stats) {
        console.log(`File ${path} was changed`);
    });
}

/**
 * 任务运行方法
 * 打开命令窗口到build目录下 执行 ‘gulp 任务名称’，默认任务直接执行gulp即可
 */
// 其他任务
exports.htmlInclude = htmlInclude;
exports.lessProcess = lessProcess;
exports.style = parallel(lessProcess, lessListen);
exports.all = parallel(allTasks, htmlListen, lessListen); // 总任务
// 默认任务
exports.default = parallel(htmlInclude, htmlListen);
