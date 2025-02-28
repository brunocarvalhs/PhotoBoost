const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");

class BaseFileSelector {
    constructor(privateDir, supportedFormats, fileType) {
        this.privateDir = privateDir;
        this.supportedFormats = supportedFormats;
        this.fileType = fileType;
    }

    listFilesInPrivateDir() {
        return fs.readdirSync(this.privateDir).filter(file =>
            this.supportedFormats.includes(path.extname(file).toLowerCase())
        );
    }

    async selectBaseFilePath() {
        const files = this.listFilesInPrivateDir();
        const { selectedFile } = await inquirer.createPromptModule()({
            type: 'list',
            name: 'selectedFile',
            message: `Selecione o ${this.fileType} base para os posts:`,
            choices: files
        });
        return path.join(this.privateDir, selectedFile);
    }
}

module.exports = BaseFileSelector;