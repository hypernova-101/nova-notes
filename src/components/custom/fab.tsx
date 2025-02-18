import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { addDoc, collection } from "firebase/firestore";
import { auth, firestore } from "@/firebase";
import { toast } from "sonner";

export default function FloatingActionButton() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [links, setlinks] = useState("")
    const [loading, setloading] = useState(false)
    
    const save = async () => {
        setloading(true)
        if(auth.currentUser) {
            const collectionRef = collection(firestore, `users/${auth.currentUser!.email}/notes`)
            
            try {
                await addDoc(collectionRef, {
                    title: title,
                    description: description,
                    links: links,
                })
                toast("Saved..")
            } catch {
                toast("failed to save")
            }
        } 
        setloading(false)
    }

    return( 
        <Dialog>
            <DialogTrigger>
                <Button className="">
                    Create
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Add Note</DialogTitle>
                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter your title.."
                    />
                <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    cols={100}
                    rows={20}
                    placeholder="Enter your content.."
                    />
                <Input
                    value={links}
                    onChange={(e) => setlinks(e.target.value)}
                    placeholder="Enter your links seperated by comma"
                />
                <DialogFooter>
                    <Button onClick={save} disabled={loading}>
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}