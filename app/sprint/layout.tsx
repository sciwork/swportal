import Container from "@/components/Container";

export default function SprintLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <Container as="main">{children}</Container>
}