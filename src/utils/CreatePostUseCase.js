class CreatePostUseCase {
    constructor(imageProcessor) {
        this.imageProcessor = imageProcessor;
    }

    async execute() {
        await this.imageProcessor.createPost();
    }
}

module.exports = CreatePostUseCase;