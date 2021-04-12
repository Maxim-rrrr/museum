import fs from 'fs';

const delFile = (name: String) => {
  fs.unlinkSync("./uploads/" + name);
}

export default delFile