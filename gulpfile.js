const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat'); //?
const sass = require('gulp-sass');
const htmlMin = require('gulp-htmlmin');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const notify = require('gulp-notify');
const browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');


const css = () => {
 return src('./src/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({cascade: false}))
  .pipe(cleanCSS({level: 2}))
  .pipe(sourcemaps.write())
  .pipe(dest('dist'));
};

const scripts = () => {
  return src('src/*.js')
    .pipe(babel({
      presets: ['babel/env']
    }))
    .pipe(uglify().on('error', notify.onError()))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
};

const minify = () => {
  return src('src/*.html')
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(dest('dist'));
};

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
};

watch('src/**/*.html', minify);
watch('src/scss/**/*.scss', css);
watch('src/*.js', scripts);
exports.default = series(minify, css, scripts, watchFiles);
