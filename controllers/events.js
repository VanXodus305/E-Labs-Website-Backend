import { Event } from "../models/events.js";
import { Registeration } from "../models/registration.js";
import { User } from "../models/user.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

async function addEvent(req, res) {
  try {
    const { title, description, startDate, endDate, createdBy } = req.body;
    if (!title || !description || !startDate || !endDate) {
      return res.status(400).json({ error: "Missing fields !" });
    }

    var location = req.body.location;
    var localFilePath = req?.file?.path;
    if (localFilePath) {
      const response = await uploadOnCloudinary(localFilePath);
      localFilePath = response?.url;
    }

    location = JSON.parse(location);

    const event = new Event({
      title,
      description,
      startDate,
      endDate,
      location,
      createdBy,
      image: localFilePath || "",
    });
    await event.save();
    res.status(201).json({
      message: "Event added successfully",
      event,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add event" });
  }
}

async function getEvents(req, res) {
  try {
    const events = await Event.find();
    res.status(200).json({
      message: "fetched events successfully",
      events,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch events" });
  }
}

async function registerForEvent(req, res) {
  try {
    const { eventId, userId } = req.body;
    const event = await Event.findById(eventId);
    const user = await User.findById(userId);
    const location = event.location;

    const registrationData = new Date();
    registrationData = registrationData.toISOString();

    if (!event || !user) {
      return res.status(404).json({ error: "Event or user not found" });
    }
    const registration = await Registeration.create({
      event: event._id,
      user: user._id,
      registrationData,
      status: "Registered",
      location,
    });
    res.status(201).json(registration);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to register for event" });
  }
}

export { addEvent, registerForEvent, getEvents };
