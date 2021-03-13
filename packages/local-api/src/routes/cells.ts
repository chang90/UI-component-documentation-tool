import express from 'express';
import {promises as fsp} from "fs";
import path from 'path';

interface Cell {
  id: string;
  content: string;
  type: 'text' | 'code'
}

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();
  router.use(express.json());

  const fullPath = path.join(dir, filename);

  router.get('/cells', async (req, res) => {
    try {
      // Read the file
      const result = await fsp.readFile(fullPath, {encoding: 'utf-8'});

      res.send(JSON.parse(result));
    } catch (err) {
      if(err.code === 'ENOENT') {
        // Unable to find file
        await fsp.writeFile(
          fullPath, 
          '[{"content":"UI Component documentation tool","type":"text","id":"0u8je"},{"content":"// Please write your first React component","type":"code","id":"w6c82"}]', 
          'utf8'
        );
        res.send([]);
      } else {
        throw err;
      }
    }
  });
  
  router.post('/cells', async (req, res) => {
    // Take the list of cells from the request obj
    // serialize them
    const { cells }: {cells: Cell[]} = req.body;

    // Write the cell into a file
    await fsp.writeFile(fullPath, JSON.stringify(cells), 'utf-8');

    res.send({status: 'ok'});
  })

  return router;
}
