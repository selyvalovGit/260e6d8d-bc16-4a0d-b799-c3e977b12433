export async function createPerson(req: any, res: any) {
    try {
        const { db } = req.app;
        const {FirstName, LastName, Position, Phone, Email} = req.body;

        if(!FirstName) {
            return res.status(400).json({ message: 'First Name is required'})
        }
        if(!LastName) {
            return res.status(400).json({ message: 'Last Name is required'})
        }
        if(!Position) {
            return res.status(400).json({ message: 'Position is required'})
        }
        if(!Phone) {
            return res.status(400).json({ message: 'Phone is required'})
        }
        if(!Email) {
            return res.status(400).json({ message: 'Email is required'})
        }

        const personEmail = await db.collection('Person').findOne({
            Email: Email.toLowerCase()
        })

        if(personEmail) {
            return res.status(400).json({message: 'Email alredy exist'})
        }

        const result = await db.collection('Person').insertOne({
            FirstName, 
            LastName, 
            Position, 
            Phone, 
            Email: Email.toLowerCase()
        });

        if (result.acknowledged) {
            res.status(200).json({ message: 'Person created' });
          } else {
            throw new Error('Person not created');
          }

    } catch(error) {
        res.status(500).json({error : error.toString()});
    }
}