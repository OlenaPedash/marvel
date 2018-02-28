/* Base */
const gulp = require('gulp');
const data = require('gulp-data');
const watch = require('gulp-watch');
const debug = require('gulp-debug');

/* Plugin for webserver*/
const browserSync = require("browser-sync");
const reload = browserSync.reload;

/* Plugin for HTML*/
const htmlmin = require('gulp-htmlmin');

/* Plugin for SASS*/
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

/* Plugin for JS*/
const concat = require('gulp-concat');
const minify = require('gulp-minify');

/* Plugin for Images */
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

/* HELPERS*/
const newer = require('gulp-newer'); /*  Plugin look for new changes in files */
const clean = require('gulp-clean'); /* Plugin delete some folder, content */

/*Task for HTML*/
gulp.task('html', () => {
  gulp.src('./src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./build'))
    .pipe(reload({ stream: true }));
});

/*Task for SCSS to CSS*/
gulp.task('scss', () => {
  gulp.src('./src/styles/main.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build/css'))
    .pipe(reload({ stream: true }));
});

/* Task for CSS */
gulp.task('css', () => {
  gulp.src('./src/styles/**/*.css')
    .pipe(newer('./build/css/'))
    .pipe(gulp.dest('./build/css/'))
    .pipe(reload({ stream: true }));
});

/*Task for JS*/
gulp.task('js', () => {
  gulp.src([
      './src/js/parts/jquery-3.2.1.min.js',
      './src/js/parts/slick.js',
      './src/js/parts/parallax.js',
      './src/js/parts/adaptive_menu_anim_btn.js',
      './src/js/parts/tracking_menu.js',
      './src/js/parts/scroll_down_button.js',
      './src/js/parts/sticky_menu.js',
      './src/js/parts/back_to_top.js',
      './src/js/parts/jquery.filterizr.js',
      './node_modules/fancybox/dist/js/jquery.fancybox.js',
      './node_modules/fancybox/dist/js/jquery.fancybox.pack.js',
      './node_modules/fancybox/lib/jquery.mousewheel.pack.js',
      './node_modules/fancybox/dist/helpers/js/jquery.fancybox-buttons',
      './node_modules/fancybox/dist/helpers/js/jquery.fancybox-media.js',
      './node_modules/fancybox/dist/helpers/js/jquery.fancybox-thumbs',
      './src/js/parts/jquery.validate.min.js',
      './src/js/parts/wow.min.js',
      './src/js/parts/jquery.animsition.min.js',
      './src/js/parts/jquery-numerator.js',
      './src/js/parts/google_map.js',
      './src/js/main.js'
    ])
    .pipe(concat('main.js'))
    .pipe(minify({
      ext: {
        min: '.js'
      },
      compress: true,
      noSource: true,
    }))
    .pipe(gulp.dest('./build/js'))
    .pipe(reload({ stream: true }));
});

/* Task for PHP */
// gulp.task('php', () => {
//   gulp.src('./src/php/**/*.php')
//     .pipe(newer('./build/'))
//     .pipe(gulp.dest('./build/php/'))
//     .pipe(reload({ stream: true }));
// });

/*Task for Images*/
gulp.task('image', () => {
  gulp.src('./src/img/**/*.*')
    .pipe(newer('./build/img/'))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()],
      interlaced: true
    }))
    .pipe(gulp.dest('./build/img/'))
    .pipe(reload({ stream: true }));
});

/* Task for Fonts */
gulp.task('fonts', () => {
  gulp.src('./src/fonts/**/*.*')
    .pipe(newer('./build/fonts/'))
    .pipe(gulp.dest('./build/fonts/'))
});

/* Task for file .htaccess */
// gulp.task('htaccess', () => {
//   gulp.src('./src/.htaccess')
//     .pipe(gulp.dest('./build/'))
// });

/* Task Build */
gulp.task('build', ['html', 'scss', 'css', 'js', 'image', 'fonts']);

/*Task for webserver*/
const config = {
  server: {
    baseDir: "./build"
  },
  tunnel: false,
  host: 'localhost',
  port: 9000,
  logPrefix: "marvel"
};

gulp.task('webserver', () => browserSync(config));

/* Task Watch */
gulp.task('watch', function() {
  watch('./src/*.html', () => gulp.run('html'));
  watch('./src/styles/**/*.scss', () => gulp.run('scss'));
  watch('./src/styles/**/*.css', () => gulp.run('css'));
  watch('./src/js/**/*.js', () => gulp.run('js'));
  // watch('./src/php/**/*.php', () => gulp.run('php'));
  watch('./src/img/**/*.*', () => gulp.run('image'));
  watch('./src/fonts/**/*.*', () => gulp.run('fonts'));
});

/* Task Default */
gulp.task('default', ['build', 'webserver', 'watch']);

/* Task Clean (delete folder [build/]) */
gulp.task('clean', () => {
  gulp.src('build', { read: false })
    .pipe(clean());
});