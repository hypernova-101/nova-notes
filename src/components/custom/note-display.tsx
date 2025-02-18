import { Note } from "@/modals";

export default function NoteDisplay({
    note
}: {
    note: Note
}) {
    return(
        <div className="w-full border p-4">    
            <h1 className="text-center text-xl font-bold">{note.title}</h1>
        </div>
    )
}