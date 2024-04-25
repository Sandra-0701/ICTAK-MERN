const express = require('express');
const router = express.Router();
const mentors = require('../model/mentorModel');


router.use(express.json());

//post mentor info

router.post('/addmentor', async (req, res) => {
    try {
        let data = req.body;
        let mentorInfo = await mentors(data).save();
        console.log(mentorInfo);
        res.status(200).send({ message: "Data added" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error adding data" });
    }
});


//get mentor info

router.get('/mentors', async (req, res) => {
    try {
        const Mentors = await mentors.find();
        res.status(200).send(Mentors);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error fetching posts");
    }
});


//delete mentor

router.delete('/remove/:id', async (req, res) => {
    try {
        const deletedMentor = await mentors.findByIdAndDelete(req.params.id);
        if (!deletedMentor) {
            return res.status(404).json({ error: "Mentor not found" });
        }
        res.json({ message: "Mentor Info deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});


//update mentor

router.put('/mentors/:id', async (req, res) => {
    const { id } = req.params;
    const { Name, Email, PhoneNumber, Password,ProjectTopic } = req.body;
  
    try {
      const updatedMentor = await mentors.findByIdAndUpdate(
        id,
        {  Name, Email, PhoneNumber, Password,ProjectTopic  },
        { new: true }
      );
  
      if (!updatedMentor) {
        return res.status(404).json({ message: 'Mentor not found' });
      }
  
      res.json({ message: 'Mentor Info updated successfully', mentors: updatedMentor });
    } catch (error) {
      console.error('Error updating mentor:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports = router;