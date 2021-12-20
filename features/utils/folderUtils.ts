import fs from "fs"

class FolderUtils {

    deleteDirectory = (path: string) => {
        fs.rmdirSync(path, { recursive: true })
    }
}
export default new FolderUtils()