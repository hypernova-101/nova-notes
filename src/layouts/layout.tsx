import FloatingActionButton from "@/components/custom/fab";

export default function Layout() {
    return(
        <>
        <nav className="flex flex-row justify-between items-center py-10 px-10 border-b-2">
            <h1 className="text-4xl font-extrabold">Nova Notes</h1>
        <FloatingActionButton/>
        </nav>
        </>
    )
}