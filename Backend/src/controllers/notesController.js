import Note from "../model/Note.js";

export async function getAllNotes(req,res){
    try {
        const notes =await Note.find().sort({createdAt:-1});
        res.status(200).json(notes);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
    
}
export async function getNoteById(req,res){
try {
    const note=await Note.findById(req.params.id);
    if(!note)return res.status(404).send("Note not found");
    res.status(200).json(note)
    } catch (error){
        console.error(error);
        res.status(500).send("Internal server error");
    }

}
export async function createNote(req,res){
    try {
        const {title,content}=req.body;
        const note=new Note({title,content});
        const newNote=await note.save();
        res.status(200).json(newNote)
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    } 
}
export async function updateNote(req,res){
    try {
        const {title,content}=req.body;
        const updatedNote=await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true})
        if(!updatedNote)return res.status(404).send("Note not found");
        res.status(200).json(updatedNote)
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    } 
}
export async function deleteNote(req,res){
    try {
        const deletedNote=await Note.findByIdAndDelete(req.params.id)
        if(!deletedNote)return res.status(404).send("Note not found");
        res.status(200).json(deletedNote)
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}