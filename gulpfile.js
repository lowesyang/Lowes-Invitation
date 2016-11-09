var gulp=require('gulp');
var gutil=require('gulp-util');
var rename=require('gulp-rename');
var uglify=require('gulp-uglify');
gulp.task('minifyjs',function(){
    return gulp.src('src/LowesInvite.js')
        .pipe(uglify().on('error',gutil.log))
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('dist'))
})

gulp.task('default',function(){
    gulp.start('minifyjs');
})