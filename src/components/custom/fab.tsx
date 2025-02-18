import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function FloatingActionButton() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [links, setlinks] = useState("")
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
                    placeholder="Enter your links.."
                />
                <DialogFooter>
                    <Button>
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}