const path = require("path");
const inquirer = require("inquirer");

const ImageProcessor = require("./utils/ImageProcessor");
const CreatePostUseCase = require("./utils/CreatePostUseCase");
const BaseFileSelector = require("./utils/BaseFileSelector");

const imagesDir = path.join(__dirname, '..', 'images');
const privateDir = path.join(__dirname, '..', 'private');
const outputDir = path.join(__dirname, '..', 'build');
const supportedImageFormats = ['.png', '.jpg', '.jpeg'];

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