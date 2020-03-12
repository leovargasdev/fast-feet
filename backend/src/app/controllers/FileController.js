import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({ name, path });

    return res.json(file);
  }

  async index(req, res) {
    const { id } = req.params;
    const file = await File.findOne({
      where: { id },
      attributes: ['id', 'url', 'path'],
    });
    return res.json(file);
  }
}

export default new FileController();
