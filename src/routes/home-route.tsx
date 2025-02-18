import NoteDisplay from "@/components/custom/note-display"
import { auth, firestore } from "@/firebase"
import { Note } from "@/modals"
import { collection, onSnapshot } from "firebase/firestore"
import React, { useEffect } from "react"

export default function HomePage() {
    const [notes, setNotes] = React.useState<Note[]>([])

    useEffect(() => {
        const run = async () => {
            if(auth.currentUser) {
                const collectionRef = collection(firestore, `users/${auth.currentUser!.email}/notes`)

                onSnapshot(collectionRef, (snapshot)=> {
                    const docs: Note[] = []

                    snapshot.docs.forEach((doc) => {
                        if(doc.exists()){ 
                            const item = doc.data() as Note

                            docs.push({
                                title: item.title,
                                description: item.description,
                                links: item.links,
                                id: doc.id
                            })
                        }
                    })
                    setNotes(docs)
                    
                })
            }
        }
        run()
    }, [])
    return (
        <main>
            {
                notes.map((note) => <NoteDisplay note={note} key={note.id}/>)
            }
        </main>
    )
}