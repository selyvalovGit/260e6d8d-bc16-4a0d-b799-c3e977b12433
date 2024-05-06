import { ObjectId } from "mongodb";


export async function getPerson(req: any, res: any) {
  try {
    const { db } = req.app;

    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'Person ID is required' });
    }

    const result = await db.collection('Persons').findOne({
      _id: new ObjectId(id)
    });

    if (!result) {
      return res.status(404).json({ message: 'Person not found' });
    }

    res.status(200).json({
      message: "Person retrieved",
      Person: result
    });

  }
  catch(error) {
    res.status(500).json({ error: error.toString() });
  }
}