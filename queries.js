// 2. db.bios.find({"awards": {$exists:true}}).pretty()
// 3. db.bios.find({"awards": {$exists:false}}).pretty()
// 4. db.bios.find({ $or: [{"contribs": "UNIX"}, { "contribs": "OOP"}]})
// 5. db.bios.find({ "awards.award": "Turing Award" })
// 6. db.bios.find({ _id: { $gt: 3, $lt: 7 } })
// 7. db.bios.find({ "awards.year": { $lt: 2000 }})
// 8. db.bio.find({ $and: [{ birth: {$exists:true}}, {death: {$exists:false}}]})
