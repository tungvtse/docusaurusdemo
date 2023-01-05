module.exports = function () {
    return {
        name: 'monitoring-plugin',
        async loadContent() {
            console.log('Config was change, run test!');
        },
        injectHtmlTags() {
            return {
                headTags: [
                    {
                        tagName: 'meta',
                        attribute: {
                            'og: description': 'My custom og: description-tag'
                        }
                    }
                ]
            }
        }
    }
}