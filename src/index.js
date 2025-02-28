const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

const ImageProcessor = require("./utils/ImageProcessor");
const CreatePostUseCase = require("./utils/CreatePostUseCase");
const BaseFileSelector = require("./utils/BaseFileSelector");

const imagesDir = path.join(__dirname, '..', 'images');
const privateDir = path.join(__dirname, '..', 'models');
const outputDir = path.join(__dirname, '..', 'build');
const supportedImageFormats = ['.png', '.jpg', '.jpeg'];

// Create directories if they do not exist
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

if (!fs.existsSync(privateDir)) {
    fs.mkdirSync(privateDir, { recursive: true });
}

async function main() {
    const { fileType } = await inquirer.createPromptModule()({
        type: 'list',
        name: 'fileType',
        message: 'Selecione o tipo de arquivo base:',
        choices: ['imagem']
    });

    const supportedFormats = supportedImageFormats;
    const baseFileSelector = new BaseFileSelector(privateDir, supportedFormats, fileType);
    const baseFilePath = await baseFileSelector.selectBaseFilePath();

    const imageProcessor = new ImageProcessor(imagesDir, baseFilePath, outputDir, supportedImageFormats);
    const createPostUseCase = new CreatePostUseCase(imageProcessor);
    await createPostUseCase.execute();
}

main();