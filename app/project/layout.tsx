import Container from "@/components/Container";

export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <Container as="main">{children}</Container>
}