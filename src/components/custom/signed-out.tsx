import { useAuth } from "@/providers/auth-provider"

export default function SignedOut({
    children
} : {
    children: React.ReactNode
}) {
    const user = useAuth()

    return (
        !user && children
    )
}