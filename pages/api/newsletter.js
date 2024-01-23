import { postNewsletter } from './user';

export default async function handler(req, res) {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Please provide an email id.' });
    }

    const result = await postNewsletter(email);

    if (result.success) {
      res.status(201).json({ message: 'Added Successfully', data: result.data });
    } else {
      res.status(500).json({ message: result.error });
    }
  } catch (error) {
    console.error("Error in newsletter handler:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}