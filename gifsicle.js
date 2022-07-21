import imagemin from 'imagemin';
import imageminGifsicle from 'imagemin-gifsicle';

(async () => {
    await imagemin(['images/*.gif'], {
        destination: 'build/images',
        plugins: [
            imageminGifsicle()
        ]
    });

    console.log('Images optimized');
})();