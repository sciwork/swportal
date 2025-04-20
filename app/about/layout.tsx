import Container from "@/components/Container";

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <Container as="main">{children}</Container>
}