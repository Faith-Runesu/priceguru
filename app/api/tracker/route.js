import { addToTrackList } from "@/lib/actions";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        // Extract product and email from the request body
        const { product, email } = req.body;
  
        // Call the addToTrackList function
        await addToTrackList(product, email);
  
        // Send a success response
        res.status(200).json({ message: 'Product added to track list successfully.' });
      } catch (error) {
        // Handle any errors
        console.error('Error adding product to track list:', error);
        res.status(500).json({ error: 'Error adding product to track list.' });
      }
    } else {
      // Handle any non-POST requests
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }