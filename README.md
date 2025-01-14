# Cimini Lab Takehome assignment

First of all, thank you for your time, it is truly appreciated!

This repository contains data for a task which should be completed in python 3.

NOTE: Do not make your solution publicly accessbile!

### Task

There are 20 images - 10 pairs each of two channels, one channel (`Ch01`) that we want to use to find a regions of interest to measure, and the other channel (`Ch02`) whose pixel values we want to measure. Noise has been artificially added to `Ch01`.

Borrowing as heavily as you need from existing online examples (suggested resources are provided for most steps, but feel free to use any python libraries you wish), write code that for each pair of images:

* Loads the pair of images ([suggested resource](https://scikit-image.org/docs/dev/user_guide.html))
* Applies a denoising or smoothing to `Ch01` ([suggested resource](https://scikit-image.org/docs/dev/auto_examples/#filtering-and-restoration))
* Segments (labels) `Ch01`, creating distinct regions in each image that correspond to each bright blob ([suggested resource](https://scikit-image.org/docs/dev/auto_examples/#segmentation-of-objects))
* Creates an overlay or outline image of the identified labels on the original `Ch01` image, and saves it out
* Measures the mean and standard deviation of channel 2 in each label ([suggested resource](https://docs.scipy.org/doc/scipy/reference/ndimage.html#measurements))

Your code should then also save out a *single* CSV file that reports, for each image, the number of objects found, the per-image mean of all objects' mean intensity in `Ch02`, and the per-image mean of all objects' standard deviation of intensity in `Ch02`. 

### Submitting

Along with your code, ensure there is a [pyproject.toml](https://packaging.python.org/en/latest/specifications/pyproject-toml/) that describes the package, and lists out all dependencies.

Include in the `README.md` instructions for installing your solution, which should amount to a single CLI command (e.g. `pip install -e .`), and running it, which should also amount to a single CLI command.

Ensure that your dependencies are pip-installable on Mac (x86 and arm) / Windows / Linux (at least Ubuntu). You do not need to test on different architectures, simply check if your dependencies and their versions are either pure python or provide wheels/binaries for those OS+architecture combinations.

If using `conda` / `mamba` / `pixi` etc. restrict the conda repository to `conda-forge` only.

When ready, return the solution to [ngogober@broadinstitute.org](ngogober@broadinstitute.org) and [bcimini@broadinstitute.org](bcimini@broadinstitute.org).

Feel free to contact [ngogober@broadinstitute.org](ngogober@broadinstitute.org) for any questions you may have. 

Thank you again for your time!

