In this repo you'll find 20 images - 10 pairs each of two channels, one channel (Ch01) that we want to use to find a regions of interest to measure, and the other channel (Ch02) whose pixel values we want to measure. Noise has been artificially added to Ch01.


Borrowing as heavily as you need from existing online examples (suggested resources are provided for most steps, but feel free to use any libraries you wish), create a script that for each pair of images:

* Loads each pair of images ([suggested resource](https://scikit-image.org/docs/dev/user_guide.html))
* Applies a denoising or smoothing to Ch01 ([suggested resource](https://scikit-image.org/docs/dev/auto_examples/#filtering-and-restoration))
* Segments (labels) Ch01, creating distinct regions in each image that correspond to each bright blob ([suggested resource](https://scikit-image.org/docs/dev/auto_examples/#segmentation-of-objects))
* Creates an overlay or outline image of the identified labels on the original Ch01 image, and saves it out
* Measures the mean and standard deviation of channel 2 in each label ([suggested resource](https://docs.scipy.org/doc/scipy/reference/ndimage.html#measurements))


Your script should then also save out a single CSV file that reports, for each image, the number of objects found, the per-image mean of all objects' mean intensity in Ch02, and the per-image mean of all objects' standard deviation of intensity in Ch02. 
