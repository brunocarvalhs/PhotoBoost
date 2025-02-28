const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

class ImageProcessor {
    constructor(imagesDir, baseImagePath, outputDir, supportedFormats) {
        this.imagesDir = imagesDir;
        this.baseImagePath = baseImagePath;
        this.outputDir = outputDir;
        this.supportedFormats = supportedFormats;
    }

    async createPost() {
        if (!fs.existsSync(this.baseImagePath)) {
            console.error(`Error: Input file is missing: ${this.baseImagePath}`);
            return;
        }

        this.checkAndCreateOutputDir();

        const imageFiles = this.getImageFiles();
        const baseImageSize = await this.getBaseImageSize();

        for (const imageFile of imageFiles) {
            await this.processImage(imageFile, baseImageSize);
        }
    }

    checkAndCreateOutputDir() {
        if (!fs.existsSync(this.outputDir)) {
            fs.mkdirSync(this.outputDir);
        }
    }

    getImageFiles() {
        return fs.readdirSync(this.imagesDir).filter(file =>
            this.supportedFormats.includes(path.extname(file).toLowerCase())
        );
    }

    async getBaseImageSize() {
        const baseImageMetadata = await sharp(this.baseImagePath).metadata();
        return { width: baseImageMetadata.width, height: baseImageMetadata.height };
    }

    async processImage(imageFile, baseImageSize) {
        const inputImagePath = path.join(this.imagesDir, imageFile);

        const resizedImageBuffer = await sharp(inputImagePath)
            .resize(baseImageSize.width, baseImageSize.height, { fit: 'cover' })
            .toBuffer();

        await sharp(resizedImageBuffer)
            .composite([{ input: this.baseImagePath, gravity: "center" }])
            .toFile(path.join(this.outputDir, `post-final_${imageFile}`));

        console.log(`Post criado com sucesso para ${imageFile}!`);
    }
}

module.exports = ImageProcessor;