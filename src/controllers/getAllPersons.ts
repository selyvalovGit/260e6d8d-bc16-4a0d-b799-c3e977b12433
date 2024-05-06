export async function getAllPersons(req: any, res: any) {
    try {
      const { db } = req.app;
  
      const result = await db.collection('Person').find().toArray();
  
      res.status(200).json({
        message: "Persons retrieved",
        persons: result
      });
  
    }
    catch(error) {
      res.status(500).json({ error: error.toString() });
    }
  }