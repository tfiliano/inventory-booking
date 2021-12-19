import nextConnect from "next-connect";
import middleware from "../../middleware/database";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  const { date } = req.query;
  const dataModel = {
    "_id": new ObjectID(),
    "dtStart": date,
    "dtEnd": date,
    "dtStamp": date,
    "createdAt": date,
    "organizer": { //booked by / office
      "name": "Fulano",
      "mobile": "02100215444",
      "email": "unknow@gmail.com",
      "notes": []
    },
    "inspector": {
      "name": "Ciclano",
      "mobile": "02100215444",
      "email": "inspector@gmail.com",
      "notes": []
    },
    "attendee": [],
    "summary": "Stay at Hotel Doria",
    "location": {
      "address": "Hotel Doria\, Amsterdam",
      "access": "you have the key",
      "contact": {
        "name": "Thiago",
        "mobile": "07564282775",
        "email": "tfiliano@gmail.com"
      }
    },
    "status": "Confirmed",
    "type": "check-in",//checkin, checkout, return
    "agency": {
      "name": "",
      "mobile": "",
      "address": "",
    }
  }

  let doc = {}
  if (date) {
    doc = await req.db.collection('events').findOne({ date: new Date(date) })
  } else {
    doc = await req.db.collection('events').findOne()
  }
  if (doc == null) {
    doc = dataModel
  }
  res.json(doc)

});

export default handler;
