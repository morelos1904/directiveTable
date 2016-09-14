var gulp = 			require ('gulp'),
	browserSync=	require	('browser-sync'),
	reload=			browserSync.reload,
	uglify= 		require ('gulp-uglify'),
	rename=			require ('gulp-rename');

/////////////////////////////////
///Scripts tasks
/////////////////////////////////
gulp.task('scripts',function(){
	gulp.src(['js/**/*.js','!js/**/*.min.js'])			//It will take all the files excluding the min files
	.pipe(rename({suffix:'.min'}))		
	.pipe(uglify())										// Minify our files
	.pipe(gulp.dest('js')) 							//We are concateneting all the files in only one
	.pipe(reload({stream:true}));
});
/////////////////////////////////
///Browser-Sync tasks
/////////////////////////////////
gulp.task('browser-sync',function(){
	browserSync({
		server:{
			baseDir:"./"
		}
	}) 	
});
/////////////////////////////////
///Html tasks
/////////////////////////////////
gulp.task('html',function(){
	gulp.src('*.html')
	.pipe(reload({stream:true}));
});
/////////////////////////////////
///Watch tasks
/////////////////////////////////
gulp.task('watch',function(){
	gulp.watch('js/**/*.js',['scripts']); 	//Every change that we made,it will run our function script
	gulp.watch('**/*.html',['html']); 	//Every change that we mad
});

/////////////////////////////////
///Default
/////////////////////////////////
gulp.task('default',['scripts','html','browser-sync','watch']);