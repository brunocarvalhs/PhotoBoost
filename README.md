# Image Resizer

This project provides a simple Node.js application to resize images for Instagram and Facebook. It allows users to convert images to the appropriate dimensions required for these platforms.

## Project Structure

```
image-resizer
├── src
│   ├── index.js                    # Entry point of the application
│   └── utils
│       ├── BaseFileSelector.js     # Responsible for selecting appropriate image files
│       ├── CreatePostUseCase.js    # Handles the creation of new posts
│       ├── ImageProcessor.js       # Contains the logic for processing images
├── package.json                    # Project metadata and dependencies
├── .gitignore                      # Files and directories to be ignored by Git
└── README.md                       # Project documentation
```

## Installation

To install the dependencies for this project, run the following command:

```bash
npm install
```

## Usage

To start the application, use the following command:

```bash
node src/index.js
```

## Features

- Resize images to fit Instagram and Facebook dimensions
- Supports multiple image formats
- Easy to use command-line interface

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please open an issue or contact the project maintainer.