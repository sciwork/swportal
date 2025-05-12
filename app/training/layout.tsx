import Container from "@/components/Container";

export default function TrainingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <Container as="main">{children}</Container>
}