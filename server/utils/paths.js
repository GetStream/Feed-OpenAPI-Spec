const path = require('path');

module.exports ={
    spec(relativePath) {
        return path.join(
            path.normalize(path.join(__dirname, "..", "..", "spec")),
            relativePath
        );
    }
}