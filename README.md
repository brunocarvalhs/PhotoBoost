# Image Resizer

This project provides a simple Node.js application to resize images for Instagram and Facebook. It allows users to convert images to the appropriate dimensions required for these platforms.

## Project Structure

```
image-resizer
├── src
│   ├── index.js          # Entry point of the application
│   └── utils
│       └── resize.js     # Utility functions for resizing images
├── package.json          # Project metadata and dependencies
├── .gitignore            # Files and directories to be ignored by Git
└── README.md             # Project documentation
```

## Installation

To get started, clone the repository and install the necessary dependencies:

```bash
git clone <repository-url>
cd image-resizer
npm install
```

## Usage

To resize an image, run the following command:

```bash
node src/index.js <path-to-image>
```

This will generate resized images in the current directory, formatted for Instagram and Facebook.

## Image Dimensions

- **Instagram**: 1080 x 1080 pixels
- **Facebook**: 1200 x 630 pixels

## Example

```bash
node src/index.js my-image.jpg
```

This command will take `my-image.jpg` and create resized versions suitable for Instagram and Facebook.

## License

This project is licensed under the MIT License.