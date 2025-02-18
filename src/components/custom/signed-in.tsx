import { useAuth } from "@/providers/auth-provider"

export default function SignedIn({
    children
} : {
    children: React.ReactNode
}) {
    const user = useAuth()

    return (
        user && children
    )
}